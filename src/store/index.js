// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import persistState from 'redux-localstorage';
import logger from 'redux-logger';
import { mapValues } from 'lodash';

import Goal from '../model/goal';
import Month from '../model/month';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  undefined,
  compose(
    persistState(null, {
      key: 'budgetGoalsState',
      deserialize(raw: ?string) {
        if (!raw) {
          return {};
        }

        let obj = JSON.parse(raw);
        obj.goals = mapValues(obj.goals, rawGoal => new Goal(rawGoal));
        obj.startDates = mapValues(
          obj.startDates,
          rawMonth => new Month(rawMonth)
        );

        return obj;
      }
    }),
    applyMiddleware(logger)
  )
);

window.store = store;

export default store;
