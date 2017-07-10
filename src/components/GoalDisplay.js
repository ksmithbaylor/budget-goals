// @flow

import React from 'react';

import type { Goal } from '../model/goal';

function GoalDisplay(props: Goal) {
  return (
    <li>
      <pre>
        {JSON.stringify(props)}
      </pre>
    </li>
  );
}

export default GoalDisplay;
