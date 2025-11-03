export type Result<T, E = Error> = Success<T> | Failure<E>;
export declare class Success<T> {
    readonly value: T;
    constructor(value: T);
    isSuccess(): this is Success<T>;
    isFailure(): this is Failure<never>;
    map<U>(fn: (value: T) => U): Result<U, never>;
    mapError<F>(): Result<T, F>;
    flatMap<U, F>(fn: (value: T) => Result<U, F>): Result<U, F>;
}
export declare class Failure<E> {
    readonly error: E;
    constructor(error: E);
    isSuccess(): this is Success<never>;
    isFailure(): this is Failure<E>;
    map<U>(): Result<U, E>;
    mapError<F>(fn: (error: E) => F): Result<never, F>;
    flatMap<U, F>(): Result<U, E | F>;
}
export declare const success: <T>(value: T) => Success<T>;
export declare const failure: <E>(error: E) => Failure<E>;
export declare const isSuccess: <T, E>(result: Result<T, E>) => result is Success<T>;
export declare const isFailure: <T, E>(result: Result<T, E>) => result is Failure<E>;
