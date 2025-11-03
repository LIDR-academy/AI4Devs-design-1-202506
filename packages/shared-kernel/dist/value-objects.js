export class ValueObject {
    _value;
    constructor(value) {
        this._value = Object.freeze(value);
    }
    equals(other) {
        return JSON.stringify(this._value) === JSON.stringify(other._value);
    }
    getValue() {
        return this._value;
    }
}
export class Email extends ValueObject {
    constructor(email) {
        if (!Email.isValid(email)) {
            throw new Error('Invalid email format');
        }
        super(email.toLowerCase());
    }
    static isValid(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
export class Phone extends ValueObject {
    constructor(phone) {
        const cleaned = phone.replace(/\D/g, '');
        if (cleaned.length < 10 || cleaned.length > 15) {
            throw new Error('Invalid phone number');
        }
        super(cleaned);
    }
}
export class Currency extends ValueObject {
    constructor(amount, code) {
        if (amount < 0) {
            throw new Error('Amount must be positive');
        }
        if (!Currency.isValidCode(code)) {
            throw new Error('Invalid currency code');
        }
        super({ amount, code: code.toUpperCase() });
    }
    static isValidCode(code) {
        const validCodes = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'MXN', 'ARS', 'CLP'];
        return validCodes.includes(code.toUpperCase());
    }
    getAmount() {
        return this._value.amount;
    }
    getCode() {
        return this._value.code;
    }
}
