// @flow

export type Month = {|
  +number: number,
  +name: string
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

export function fromName(name: string): Month {
  return {
    name,
    number: monthNames.indexOf(name) + 1
  };
}

export function fromNumber(number: number): Month {
  return {
    name: monthNames[number - 1],
    number
  };
}
