export class DomainError extends Error {
    code;
    statusCode;
    constructor(message, code, statusCode = 400) {
        super(message);
        this.code = code;
        this.statusCode = statusCode;
        this.name = 'DomainError';
    }
}
export class ValidationError extends DomainError {
    field;
    constructor(message, field) {
        super(message, 'VALIDATION_ERROR', 400);
        this.field = field;
        this.name = 'ValidationError';
    }
}
export class NotFoundError extends DomainError {
    constructor(resource, identifier) {
        const message = identifier
            ? `${resource} with identifier ${identifier} not found`
            : `${resource} not found`;
        super(message, 'NOT_FOUND', 404);
        this.name = 'NotFoundError';
    }
}
export class UnauthorizedError extends DomainError {
    constructor(message = 'Unauthorized access') {
        super(message, 'UNAUTHORIZED', 401);
        this.name = 'UnauthorizedError';
    }
}
export class ForbiddenError extends DomainError {
    constructor(message = 'Access forbidden') {
        super(message, 'FORBIDDEN', 403);
        this.name = 'ForbiddenError';
    }
}
export class ConflictError extends DomainError {
    constructor(message) {
        super(message, 'CONFLICT', 409);
        this.name = 'ConflictError';
    }
}
export class InternalError extends DomainError {
    constructor(message = 'Internal server error') {
        super(message, 'INTERNAL_ERROR', 500);
        this.name = 'InternalError';
    }
}
