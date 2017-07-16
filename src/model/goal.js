// @flow

import type Money from './money';
import type Month from './month';

export type Goal = {|
  +id: number,
  +name: string,
  +amount: Money,
  +soFar: Money,
  +deadline: Month
|};
