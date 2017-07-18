// @flow

import type Goal from '../../model/goal';

export type ADD_GOAL = {|
  +type: 'ADD_GOAL',
  +payload: Goal
|};

export default function addGoal(goal: Goal): ADD_GOAL {
  return {
    type: 'ADD_GOAL',
    payload: goal
  };
}
