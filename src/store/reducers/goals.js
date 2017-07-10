// @flow

import type { Goal } from '../../model/goal';
import type { Action } from '../actions';

export type GoalsState = { [number]: Goal };
export const initialState: GoalsState = {};

export default function goals(
  state: GoalsState = initialState,
  action: Action
) {
  switch (action.type) {
    case 'ADD_GOAL':
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
}
