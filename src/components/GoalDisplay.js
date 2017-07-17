// @flow

import React from 'react';
import { connect } from 'react-redux';

import StartDateSelector from './StartDateSelector';
import startDateFor from '../store/selectors/startDateFor';
import type { Goal } from '../model/goal';
import type Month from '../model/month';

function GoalDisplay({ goal, startDate }: { goal: Goal, startDate: ?Month }) {
  return (
    <tr>
      <td>
        {goal.name}
      </td>
      <td>
        {goal.amount.toString()}
      </td>
      <td>
        {goal.soFar.toString()}
      </td>
      <td>
        {goal.deadline.toString()}
      </td>
      <td>- -</td>
      <td>
        <StartDateSelector
          goal={goal}
          startDate={startDate}
          monthsInAdvance={12}
        />
      </td>
    </tr>
  );
}

const mapStateToProps = (state, props) => ({
  startDate: startDateFor(state, props)
});

export default connect(mapStateToProps)(GoalDisplay);
