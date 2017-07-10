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

  constructor(name: string, number: number) {
    this.name = name;
    this.number = number;
  }

  static fromName(name: string): Month {
    return new Month(name, monthNames.indexOf(name) + 1);
  }

  static fromNumber(number: number): Month {
    return new Month(monthNames[number - 1], number);
  }

  toString() {
    return this.name;
  }
}
