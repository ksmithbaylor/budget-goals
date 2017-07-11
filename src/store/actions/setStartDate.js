// @flow

import type Month from '../../model/month';

export type SET_START_DATE = {|
  +type: 'SET_START_DATE',
  +payload: {|
    +goalId: number,
    +month: Month
  |}
|};

export default function setStartDate(
  goalId: number,
  month: Month
): SET_START_DATE {
  return {
    type: 'SET_START_DATE',
    payload: {
      goalId,
      month
    }
  };
}
