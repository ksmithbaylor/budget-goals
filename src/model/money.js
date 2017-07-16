// @flow

import Big from 'big.js';

export default class Money extends Big {
  // Needed for Flow to recognize this as its own subclass
  // eslint-disable-next-line no-useless-constructor
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
