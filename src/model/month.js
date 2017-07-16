// @flow

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

export default class Month {
  name: string;
  number: number;
  year: number;

  constructor(name: string, number: number, year: number) {
    this.name = name;
    this.number = number;
    this.year = year;
  }

  static fromNameAndYear(name: string, year: number): Month {
    if (!monthNames.includes(name)) {
      throw new Error(`Invalid month name: ${name}`);
    }
    return new Month(name, monthNames.indexOf(name) + 1, year);
  }

  static fromNumberAndYear(number: number, year: number): Month {
    if (number < 1 || number > 12) {
      throw new Error(`Invalid month number: ${number}`);
    }
    return new Month(monthNames[number - 1], number, year);
  }

  static fromMonthYearString(string: string): Month {
    if (!Month.isValidMonthYearString(string)) {
      throw new Error('Invalid month/year string');
    }
    const split = string.split(' ');
    return Month.fromNameAndYear(split[0], parseInt(split[1]));
  }

  static currentMonth(): Month {
    const today = new Date();
    return Month.fromNumberAndYear(today.getMonth() + 1, today.getFullYear());
  }

  static isValidMonthYearString(string: string): boolean {
    const split = string.split(' ');

    return (
      split.length === 2 &&
      monthNames.includes(split[0]) &&
      /^\d\d\d\d$/.test(split[1])
    );
  }

  isEqualTo(other: Month) {
    return other.year === this.year && other.number === this.number;
  }

  isBefore(other: Month) {
    return (
      other.year > this.year ||
      (other.year === this.year && other.number > this.number)
    );
  }

  isAfter(other: Month) {
    return !this.isEqualTo(other) && !this.isBefore(other);
  }

  isNotBefore(other: Month) {
    return !this.isBefore(other);
  }

  isNotAfter(other: Month) {
    return !this.isAfter(other);
  }

  toString() {
    return `${this.name} ${this.year}`;
  }
}
