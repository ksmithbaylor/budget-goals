// @flow

import type { State } from '../reducers';
import type Month from '../../model/month';
import type Goal from '../../model/goal';

export default function startDateFor(
  state: State,
  props: { goal: Goal }
): ?Month {
  return state.startDates[props.goal.id];
}
