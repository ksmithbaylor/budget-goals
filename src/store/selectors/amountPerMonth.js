// @flow

import Money from '../../model/money';
import type Goal from '../../model/goal';
import type { State } from '../reducers';

export default function amountPerMonth(
  state: State,
  { goal }: { goal: Goal }
): ?Money {
  const start = state.startDates[goal.id];
  if (start) {
    const moneyLeft = goal.amount.minus(goal.soFar);
    const monthsLeft = start.diff(goal.deadline);

    return new Money(moneyLeft.div(monthsLeft));
  }

  return null;
}
