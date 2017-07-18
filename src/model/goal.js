// @flow

import Money from './money';
import Month from './month';

export default class Goal {
  id: number;
  name: string;
  amount: Money;
  soFar: Money;
  deadline: Month;

  constructor(props: {
    id: number,
    name: string,
    amount: string | Money,
    soFar: string | Money,
    deadline: { name: string, number: number, year: number } | Month
  }) {
    this.id = props.id;
    this.name = props.name;
    this.amount =
      props.amount instanceof Money ? props.amount : new Money(props.amount);
    this.soFar =
      props.soFar instanceof Money ? props.soFar : new Money(props.soFar);
    this.deadline =
      props.deadline instanceof Month
        ? props.deadline
        : new Month(props.deadline);
  }
}
