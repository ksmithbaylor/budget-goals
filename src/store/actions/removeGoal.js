// @flow

export type REMOVE_GOAL = {|
  +type: 'REMOVE_GOAL',
  +payload: number
|};

export default function addGoal(goalId: number): REMOVE_GOAL {
  return {
    type: 'REMOVE_GOAL',
    payload: goalId
  };
}
