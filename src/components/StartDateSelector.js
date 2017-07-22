// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';

import Month from '../model/month';
import setStartDate from '../store/actions/setStartDate';
import clearStartDate from '../store/actions/clearStartDate';
import { monthRange } from '../config';
import type Goal from '../model/goal';
import type { Action } from '../store/actions';

function StartDateSelector(props: {
  goal: Goal,
  startDate: ?Month,
  changeStartDate: (number, Event) => void
}) {
  const { goal, startDate, changeStartDate } = props;
  const months = monthRange.filter(month => month.isNotAfter(goal.deadline));
  const value = startDate instanceof Month ? startDate.toString() : '';

  return (
    <td>
      <select value={value} onChange={changeStartDate.bind(null, goal.id)}>
        <option value="">- -</option>
        {months.map((month, i) =>
          <option key={i} value={month.toString()}>
            {month.toString()}
          </option>
        )}
      </select>
    </td>
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
