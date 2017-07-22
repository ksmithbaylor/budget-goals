// @flow

import Month from './model/month';

function* monthsFrom(month: Month, max: number, deadline: ?Month) {
  yield month;

  while (max-- && (!deadline || month.isBefore(deadline))) {
    month = month.succ();
    yield month;
  }
}

export const monthRange = [...monthsFrom(Month.currentMonth(), 11)];
export const chartColors = [
  '#ff5722',
  '#ff9800',
  '#ffc107',
  '#ffeb3b',
  '#cddc39',
  '#8bc34a',
  '#4caf50',
  '#009688',
  '#00bcd4',
  '#03a9f4',
  '#2196f3',
  '#3f51b5',
  '#673ab7',
  '#9c27b0',
  '#e91e63'
];
