// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import type { Goal } from '../model/goal';
import type { State } from '../store/reducers';

import GoalDisplay from './GoalDisplay';
import AddGoal from './AddGoal';

const Container = styled.div``;

function Goals(props: { goals: Goal[] }) {
  return (
    <Container>
      <AddGoal />
      <hr />
      <ul>
        {props.goals.map(goal => <GoalDisplay key={goal.id} {...goal} />)}
      </ul>
    </Container>
  );
}

export default connect(
  (state: State) => ({
    goals: state.goals
  }),
  null,
  null,
  { pure: true }
)(Goals);
