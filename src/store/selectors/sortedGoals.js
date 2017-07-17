import { createSelector } from 'reselect';

import type { State } from '../store/reducers';
import type { GoalsState } from '../store/reducers/goals';

const getGoals = (state: State) => state.goals;

export default createSelector([getGoals], (goals: GoalsState) => {
  return Object.keys(goals)
    .sort((a, b) => goals[a].deadline.isAfter(goals[b].deadline))
    .map(id => goals[id]);
});
