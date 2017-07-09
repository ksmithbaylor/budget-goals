// @flow

import { combineReducers } from 'redux';

import goals, { initialState as goalsState } from './goals';

export type State = {|
  +goals: typeof goalsState
|};

export default combineReducers({ goals });
