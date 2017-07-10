// @flow

import React from 'react';

import GoalTable from './GoalTable';
import AddGoal from './AddGoal';

export default function Goals() {
  return (
    <div>
      <AddGoal />
      <GoalTable />
    </div>
  );
}
