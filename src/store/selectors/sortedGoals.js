// @flow

import { createSelector } from 'reselect';
import { map } from 'lodash';

import type { State } from '../store/reducers';
import type { GoalsState } from '../store/reducers/goals';

const getGoals = (state: State) => state.goals;

export default createSelector([getGoals], (goals: GoalsState) => {
  return map(goals).sort((a, b) => b.deadline.diff(a.deadline));
});
