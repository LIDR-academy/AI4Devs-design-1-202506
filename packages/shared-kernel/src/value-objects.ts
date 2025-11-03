export abstract class ValueObject<T> {
  protected readonly _value: T;

  constructor(value: T) {
    this._value = Object.freeze(value);
  }

  public equals(other: ValueObject<T>): boolean {
    return JSON.stringify(this._value) === JSON.stringify(other._value);
  }

  public getValue(): T {
    return this._value;
  }
}

export class Email extends ValueObject<string> {
  constructor(email: string) {
    if (!Email.isValid(email)) {
      throw new Error('Invalid email format');
    }
    super(email.toLowerCase());
  }

  static isValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

export class Phone extends ValueObject<string> {
  constructor(phone: string) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length < 10 || cleaned.length > 15) {
      throw new Error('Invalid phone number');
    }
    super(cleaned);
  }
}

export class Currency extends ValueObject<{amount: number; code: string}> {
  constructor(amount: number, code: string) {
    if (amount < 0) {
      throw new Error('Amount must be positive');
    }
    if (!Currency.isValidCode(code)) {
      throw new Error('Invalid currency code');
    }
    super({ amount, code: code.toUpperCase() });
  }

  static isValidCode(code: string): boolean {
    const validCodes = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'MXN', 'ARS', 'CLP'];
    return validCodes.includes(code.toUpperCase());
  }

  getAmount(): number {
    return this._value.amount;
  }

  getCode(): string {
    return this._value.code;
  }
}