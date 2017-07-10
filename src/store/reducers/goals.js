// @flow

import type { Goal } from '../../model/goal';
import type { Action } from '../actions';

type LocalState = Goal[];
export const initialState: LocalState = [];

export default function goals(
  state: LocalState = initialState,
  action: Action
) {
  switch (action.type) {
    case 'ADD_GOAL':
      return state.concat(action.payload);
    default:
      return state;
  }
}
