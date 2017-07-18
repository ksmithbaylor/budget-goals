// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import sortedGoals from '../store/selectors/sortedGoals';
import type { State } from '../store/reducers';
import type Goal from '../model/goal';

import GoalDisplay from './GoalDisplay';

const Container = styled.table``;

function GoalTable(props: { goals: Goal[] }) {
  return (
    <Container>
      <thead>
        <tr>
          <th>Goal</th>
          <th>Target</th>
          <th>So Far</th>
          <th>Deadline</th>
          <th>Per Month</th>
          <th>Start Month</th>
        </tr>
      </thead>
      <tbody>
        {props.goals.map((goal: Goal) =>
          <GoalDisplay key={goal.id} goal={goal} />
        )}
      </tbody>
    </Container>
  );
}

export default connect(
  (state: State) => ({
    goals: sortedGoals(state)
  }),
  null,
  null,
  { pure: true }
)(GoalTable);
