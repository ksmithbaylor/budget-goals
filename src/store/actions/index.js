// @flow

import type { ADD_GOAL } from './addGoal';
export * from './addGoal';

import type { REMOVE_GOAL } from './removeGoal';
export * from './removeGoal';

import type { SET_START_DATE } from './setStartDate';
export * from './setStartDate';

import type { CLEAR_START_DATE } from './clearStartDate';
export * from './clearStartDate';

import type { UPDATE_GOAL } from './updateGoal';
export * from './updateGoal';

export type Action =
  | ADD_GOAL
  | REMOVE_GOAL
  | SET_START_DATE
  | CLEAR_START_DATE
  | UPDATE_GOAL;
