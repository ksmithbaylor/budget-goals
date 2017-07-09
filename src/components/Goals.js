// @flow

import React from 'react';
import { connect } from 'react-redux';

import type { Goal } from '../model/goal';
import type { State } from '../store/reducers';

import GoalDisplay from './GoalDisplay';
import AddGoal from './AddGoal';

function Goals(props: { goals: Goal[] }) {
  return (
    <div>
      <ul>
        {props.goals.map(goal => <GoalDisplay key={goal.id} {...goal} />)}
      </ul>
      <AddGoal />
    </div>
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
