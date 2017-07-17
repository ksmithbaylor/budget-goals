// @flow

import type { State } from '../reducers';
import type { Goal } from '../../model/goal';

export default (state: State, props: { goal: Goal }) => {
  console.log('selector', {
    state,
    goalId: props.goal.id,
    startDates: state.startDates,
    date: state.startDates[props.goal.id]
  });
  return state.startDates[props.goal.id];
};
