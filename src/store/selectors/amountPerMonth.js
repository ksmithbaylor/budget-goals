// @flow

import Money from '../../model/money';
import Month from '../../model/month';
import type Goal from '../../model/goal';
import type { State } from '../reducers';

export default function amountPerMonth(
  state: State,
  { goal }: { goal: Goal }
): ?Money {
  const start = state.startDates[goal.id];

  if (start instanceof Month) {
    const moneyLeft = goal.amount.minus(goal.soFar);
    const monthsLeft = start.diff(goal.deadline);

    return new Money(moneyLeft.div(monthsLeft));
  }

  return null;
}
