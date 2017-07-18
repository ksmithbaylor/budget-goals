// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import Month from '../model/month';
import setStartDate from '../store/actions/setStartDate';
import clearStartDate from '../store/actions/clearStartDate';
import type Goal from '../model/goal';
import type { Action } from '../store/actions';

function* monthsFrom(month, max, deadline) {
  while (max-- && month.isBefore(deadline)) {
    month = month.succ();
    yield month;
  }
}

function StartDateSelector(props: {
  goal: Goal,
  monthsInAdvance: number,
  startDate: ?Month,
  changeStartDate: (number, Event) => void
}) {
  const { goal, monthsInAdvance, startDate, changeStartDate } = props;
  const current = Month.currentMonth();
  const months = [
    current,
    ...monthsFrom(current, monthsInAdvance, goal.deadline)
  ];
  const value = startDate instanceof Month ? startDate.toString() : '';

  return (
    <select value={value} onChange={changeStartDate.bind(null, goal.id)}>
      <option value="">- -</option>
      {months.map((month, i) =>
        <option key={i} value={month.toString()}>
          {month.toString()}
        </option>
      )}
    </select>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  changeStartDate: (goalId, e) => {
    if (e.target.value) {
      dispatch(setStartDate(goalId, Month.fromMonthYearString(e.target.value)));
    } else {
      dispatch(clearStartDate(goalId));
    }
  }
});

export default connect(null, mapDispatchToProps)(StartDateSelector);
