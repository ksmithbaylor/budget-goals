// @flow

import React from 'react';

import type { Goal } from '../model/goal';

function GoalDisplay(props: Goal) {
  return (
    <tr>
      <td>
        {props.name}
      </td>
      <td>
        {props.amount.toString()}
      </td>
      <td>
        {props.soFar.toString()}
      </td>
      <td>
        {props.deadline.toString()}
      </td>
      <td>- -</td>
      <td>- -</td>
    </tr>
  );
}

export default GoalDisplay;
