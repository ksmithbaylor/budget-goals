// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import StartDateSelector from './StartDateSelector';
import startDateFor from '../store/selectors/startDateFor';
import type Goal from '../model/goal';
import type Month from '../model/month';
import removeGoal from '../store/actions/removeGoal';

const Row = styled.tr`
  line-height: 2.87em;
  td {
    vertical-align: inherit !important;
  }
`;

const DeleteButton = styled.td`
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #eee;
  }

  &:after {
    content: '\u2573';
  }
`;

function GoalDisplay({
  goal,
  startDate,
  removeGoal
}: {
  goal: Goal,
  startDate: ?Month,
  removeGoal: number => void
}) {
  return (
    <Row>
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
      <DeleteButton onClick={() => removeGoal(goal.id)} />
    </Row>
  );
}

const mapStateToProps = (state, props) => ({
  startDate: startDateFor(state, props)
});

const mapDispatchToProps = { removeGoal };

export default connect(mapStateToProps, mapDispatchToProps)(GoalDisplay);
