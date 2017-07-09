// @flow

import React from "react";

import type { Goal } from "../model/goal";

function GoalDisplay(props: Goal) {
  return (
    <li>
      goal {props.id}
    </li>
  );
}

export default GoalDisplay;
