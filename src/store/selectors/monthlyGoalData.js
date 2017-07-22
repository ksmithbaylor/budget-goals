// @flow

import { createSelector } from 'reselect';

import startDateFor from './startDateFor';
import amountPerMonth from './amountPerMonth';
import sortedGoals from './sortedGoals';
import { monthRange } from '../../config';
import Month from '../../model/month';
import Money from '../../model/money';
import type { State } from '../reducers';
import type Goal from '../../model/goal';

function monthData(goal: Goal, state: State): ?Array<?Money> {
  const start = startDateFor(state, { goal });
  const end = goal.deadline;
  const perMonth = amountPerMonth(state, { goal });

  if (start instanceof Month) {
    return monthRange.map(
      month =>
        month.isNotBefore(start) && month.isNotAfter(end) ? perMonth : null
    );
  }

  return null;
}

export type MonthlyGoalData = Array<{ goal: Goal, data: Array<?Money> }>;

export default function monthlyGoalData(state: State) {
  return sortedGoals(state).map(goal => ({
    goal,
    data: monthData(goal, state)
  }));
}
