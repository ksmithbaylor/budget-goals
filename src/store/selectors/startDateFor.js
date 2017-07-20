// @flow

import type { State } from '../reducers';
import type Goal from '../../model/goal';

export default (state: State, props: { goal: Goal }) => {
  return state.startDates[props.goal.id];
};
