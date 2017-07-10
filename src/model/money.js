// @flow

import Big from 'big.js';

export default class Money extends Big {
  constructor(input: number | string): void {
    super(input);
  }

  toString(): string {
    return '$' + this.toFixed(2);
  }

  static isValid(input: number | string): boolean {
    return (
      typeof input === 'number' || // numbers are always valid
      /^\d+\.\d\d$/.test(input) || // 2 decimal places
      /^\d+$/.test(input) // no decimal places
    );
  }
}
