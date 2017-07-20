// @flow

import type Goal from '../../model/goal';
import type { Action } from '../actions';
import { omit } from 'lodash';

export type GoalsState = { [number]: Goal };
export const initialState: GoalsState = {};

export default function goals(
  state: GoalsState = initialState,
  action: Action
) {
  switch (action.type) {
    case 'ADD_GOAL':
      return { ...state, [action.payload.id]: action.payload };
    case 'REMOVE_GOAL':
      return omit(state, action.payload);
    case 'UPDATE_GOAL':
      return {
        ...state,
        [action.payload.goalId]: {
          ...state[action.payload.goalId],
          [action.payload.field]: action.payload.newValue
        }
      };
    default:
      return state;
  }
}
