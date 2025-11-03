"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobEntity = void 0;
function generateId() {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}
class JobEntity {
    constructor(data) {
        this.data = data;
    }
    static create(props) {
        return new JobEntity({
            ...props,
            id: generateId(),
            status: 'DRAFT',
            salaryCurrency: props.salaryCurrency || 'EUR',
            remoteWork: props.remoteWork ?? false,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
    get id() {
        return this.data.id;
    }
    get props() {
        return { ...this.data };
    }
    update(updates) {
        this.data = {
            ...this.data,
            ...updates,
            updatedAt: new Date()
        };
    }
    publish() {
        if (this.data.status === 'CLOSED') {
            throw new Error('Cannot publish a closed job');
        }
        this.data.status = 'ACTIVE';
        this.data.updatedAt = new Date();
    }
    pause() {
        if (this.data.status !== 'ACTIVE') {
            throw new Error('Only active jobs can be paused');
        }
        this.data.status = 'PAUSED';
        this.data.updatedAt = new Date();
    }
    close() {
        this.data.status = 'CLOSED';
        this.data.updatedAt = new Date();
    }
    toJSON() {
        return { ...this.data };
    }
}
exports.JobEntity = JobEntity;
//# sourceMappingURL=job.entity.js.map