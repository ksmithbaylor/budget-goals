// @flow

import type Money from './money';
import type Deadline from './deadline';

export type Goal = {|
  +id: number,
  +name: string,
  +amount: Money,
  +soFar: Money,
  +deadline: Deadline
|};
