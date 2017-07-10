// @flow

import React from 'react';

import type { Goal } from '../model/goal';

function GoalDisplay({ goal }: { goal: Goal }) {
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
      <td>- -</td>
    </tr>
  );
}

export default GoalDisplay;
