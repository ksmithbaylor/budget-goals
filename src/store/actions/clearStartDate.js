// @flow

export type CLEAR_START_DATE = {|
  +type: 'CLEAR_START_DATE',
  +payload: number
|};

export default function clearStartDate(goalId: number): CLEAR_START_DATE {
  return {
    type: 'CLEAR_START_DATE',
    payload: goalId
  };
}
