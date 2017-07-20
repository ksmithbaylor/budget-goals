// @flow

import type Goal from '../../model/goal';
import type Money from '../../model/money';
import type Month from '../../model/month';

export type UPDATE_GOAL = {|
  +type: 'UPDATE_GOAL',
  +payload: {
    goalId: number,
    field: string,
    newValue: string | Money | Month
  }
|};

export default function modifyMoney(
  goalId: number,
  field: string,
  newValue: string | Money | Month
): UPDATE_GOAL {
  return {
    type: 'UPDATE_GOAL',
    payload: { goalId, field, newValue }
  };
}
