// @flow

import type Month from '../../model/month';
import type { Action } from '../actions';
import { omit } from 'lodash';

export type StartDatesState = { [goalId: number]: ?Month };
export const initialState: StartDatesState = {};

export default function startDates(
  state: StartDatesState = initialState,
  action: Action
) {
  switch (action.type) {
    case 'SET_START_DATE':
      return { ...state, [action.payload.goalId]: action.payload.month };
    case 'CLEAR_START_DATE':
      return { ...state, [action.payload.goalId]: null };
    case 'REMOVE_GOAL':
      return omit(state, action.payload);
    default:
      return state;
  }
}
