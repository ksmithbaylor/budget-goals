// @flow

import Month from './month';
import type MonthType from './month';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default class Deadline {
  month: MonthType;
  year: number;

  constructor(month: MonthType, year: number) {
    this.month = month;
    this.year = year;
  }

  static fromMonthYearString(string: string): Deadline {
    const split = string.split(' ');
    return new Deadline(Month.fromName(split[0]), parseInt(split[1]));
  }

  static isValid(string: string) {
    const split = string.split(' ');

    return monthNames.includes(split[0]) && /^\d\d\d\d$/.test(split[1]);
  }

  toString() {
    return this.month.toString() + ' ' + this.year;
  }
}
