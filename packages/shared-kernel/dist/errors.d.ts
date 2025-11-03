export declare class DomainError extends Error {
    readonly code: string;
    readonly statusCode: number;
    constructor(message: string, code: string, statusCode?: number);
}
export declare class ValidationError extends DomainError {
    readonly field?: string | undefined;
    constructor(message: string, field?: string | undefined);
}
export declare class NotFoundError extends DomainError {
    constructor(resource: string, identifier?: string);
}
export declare class UnauthorizedError extends DomainError {
    constructor(message?: string);
}
export declare class ForbiddenError extends DomainError {
    constructor(message?: string);
}
export declare class ConflictError extends DomainError {
    constructor(message: string);
}
export declare class InternalError extends DomainError {
    constructor(message?: string);
}
