// @flow

import { combineReducers } from 'redux';

import goals, { initialState as goalsState } from './goals';
import startDates, { initialState as startDatesState } from './startDates';

export type State = {|
  +goals: typeof goalsState,
  +startDates: typeof startDatesState
|};

export default combineReducers({ goals, startDates });
