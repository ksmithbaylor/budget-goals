// @flow

import { fromName } from './month';
import type { Month } from './month';

export type Deadline = {|
  +month: Month,
  +year: number
|};

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

export function fromMonthYearString(string: string): Deadline {
  const split = string.split(' ');

  return {
    month: fromName(split[0]),
    year: parseInt(split[1])
  };
}

export function isValid(string: string) {
  const split = string.split(' ');

  return monthNames.includes(split[0]) && /^\d\d\d\d$/.test(split[1]);
}
