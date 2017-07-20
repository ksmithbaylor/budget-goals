// @flow

import Month from '../../model/month';
import type Goal from '../../model/goal';
import type { State } from '../reducers';

export default function goalIsActive(
  state: State,
  { goal, month = Month.currentMonth() }: { goal: Goal, month: Month }
): boolean {
  const start = state.startDates[goal.id];

  return (
    month.isNotAfter(goal.deadline) &&
    (start instanceof Month ? month.isNotBefore(start) : false)
  );
}
