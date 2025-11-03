export class Success {
    value;
    constructor(value) {
        this.value = value;
    }
    isSuccess() {
        return true;
    }
    isFailure() {
        return false;
    }
    map(fn) {
        return new Success(fn(this.value));
    }
    mapError() {
        return this;
    }
    flatMap(fn) {
        return fn(this.value);
    }
}
export class Failure {
    error;
    constructor(error) {
        this.error = error;
    }
    isSuccess() {
        return false;
    }
    isFailure() {
        return true;
    }
    map() {
        return this;
    }
    mapError(fn) {
        return new Failure(fn(this.error));
    }
    flatMap() {
        return this;
    }
}
export const success = (value) => new Success(value);
export const failure = (error) => new Failure(error);
// Utility functions
export const isSuccess = (result) => result.isSuccess();
export const isFailure = (result) => result.isFailure();
