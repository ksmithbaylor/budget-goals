// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import linkState from 'linkstate';
import uuid from 'uuid/v1';

import Money from '../model/money';
import Month from '../model/month';
import Goal from '../model/goal';

import addGoal from '../store/actions/addGoal';

type Props = {
  addGoal(goal: Goal): void
};

type State = {|
  name: string,
  amount: string,
  soFar: string,
  deadline: string
|};

const initialState: State = { name: '', amount: '', soFar: '', deadline: '' };

const Container = styled.form`
  display: flex;
  flex-direction: row;
`;

const Field = styled.input`
  margin-right: 0.5em;
  flex-grow: ${props => props.size || '1'};
  flex-basis: ${props => (props.size || '1') + '%'};
  display: inline-block !important;
  width: unset !important;
  height: 2.5em;
`;

const SubmitButton = styled.button`
  flex: 0 0 auto;
  height: 2.5em;
  margin-right: 0 !important;
`;

const Title = styled.h4`margin-top: 0 !important;`;

class AddGoal extends React.Component<Props, Props, State> {
  static defaultProps: Props = { addGoal(goal) {} };
  state: State = initialState;

  handleAdd = (e: Event) => {
    e.preventDefault();

    this.props.addGoal(
      new Goal({
        id: uuid(),
        name: this.state.name,
        amount: new Money(this.state.amount),
        soFar: new Money(this.state.soFar),
        deadline: Month.fromMonthYearString(this.state.deadline)
      })
    );

    this.setState(initialState);
  };

  readyToAdd = () => {
    const { name, amount, soFar, deadline } = this.state;

    return (
      name.length > 0 &&
      Money.isValid(amount) &&
      Money.isValid(soFar) &&
      Month.isValidMonthYearString(deadline)
    );
  };

  render() {
    return (
      <div>
        <Title>Add a goal:</Title>
        <Container onSubmit={this.handleAdd}>
          <Field
            type="text"
            placeholder="Goal name"
            size="3"
            value={this.state.name}
            onChange={linkState(this, 'name')}
          />
          <Field
            type="text"
            placeholder="Target amount"
            value={this.state.amount}
            onChange={linkState(this, 'amount')}
          />
          <Field
            type="text"
            placeholder="Amount saved so far"
            size="0.3"
            value={this.state.soFar}
            onChange={linkState(this, 'soFar')}
          />
          <Field
            type="text"
            placeholder="Deadline"
            size="2"
            value={this.state.deadline}
            onChange={linkState(this, 'deadline')}
          />
          <SubmitButton
            type="submit"
            disabled={!this.readyToAdd()}
            onClick={this.handleAdd}
            className="button button-default"
          >
            Add
          </SubmitButton>
        </Container>
      </div>
    );
  }
}

export default connect(null, { addGoal }, null, { pure: true })(AddGoal);
