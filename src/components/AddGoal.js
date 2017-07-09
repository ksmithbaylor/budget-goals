// @flow

import React from 'react';
import { connect } from 'react-redux';
import Big from 'big.js';

import type { Goal } from '../model/goal';
import { fromMonthYearString } from '../model/deadline';

import addGoal from '../store/actions/addGoal';

let nextId = 0;

type Props = {
  addGoal(goal: Goal): void
};

type State = {|
  +name: string,
  +amount: string,
  +soFar: string,
  +deadline: string
|};

class AddGoal extends React.Component<Props, Props, State> {
  static defaultProps: Props = { addGoal(goal) {} };
  state: State = { name: '', amount: '', soFar: '', deadline: '' };

  handleAdd = (e: Event) => {
    this.props.addGoal({
      id: nextId++,
      name: this.state.name,
      amount: new Big(this.state.amount),
      soFar: new Big(this.state.soFar),
      deadline: fromMonthYearString(this.state.deadline)
    });
  };

  render() {
    return <p onClick={this.props.addGoal}>add goal</p>;
  }
}

export default connect(null, { addGoal }, null, { pure: true })(AddGoal);
