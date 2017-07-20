// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import StartDateSelector from './StartDateSelector';
import EditableField from './EditableField';
import startDateFor from '../store/selectors/startDateFor';
import type Goal from '../model/goal';
import type Month from '../model/month';
import type Money from '../model/money';
import removeGoal from '../store/actions/removeGoal';
import updateGoal from '../store/actions/updateGoal';

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
  removeGoal,
  updateGoal
}: {
  goal: Goal,
  startDate: ?Month,
  removeGoal: number => void,
  updateGoal: (number, string, Money) => void
}) {
  return (
    <Row>
      <td>
        {goal.name}
      </td>
      <EditableField
        value={goal.amount}
        width="5em"
        onChange={newValue => updateGoal(goal.id, 'amount', newValue)}
      />
      <EditableField
        value={goal.soFar}
        width="5em"
        onChange={newValue => updateGoal(goal.id, 'soFar', newValue)}
      />
      <EditableField
        value={goal.deadline}
        width="10em"
        onChange={newValue => updateGoal(goal.id, 'deadline', newValue)}
      />
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

const mapDispatchToProps = { removeGoal, updateGoal };

export default connect(mapStateToProps, mapDispatchToProps)(GoalDisplay);
