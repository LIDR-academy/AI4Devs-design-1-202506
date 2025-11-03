export declare abstract class ValueObject<T> {
    protected readonly _value: T;
    constructor(value: T);
    equals(other: ValueObject<T>): boolean;
    getValue(): T;
}
export declare class Email extends ValueObject<string> {
    constructor(email: string);
    static isValid(email: string): boolean;
}
export declare class Phone extends ValueObject<string> {
    constructor(phone: string);
}
export declare class Currency extends ValueObject<{
    amount: number;
    code: string;
}> {
    constructor(amount: number, code: string);
    static isValidCode(code: string): boolean;
    getAmount(): number;
    getCode(): string;
}
