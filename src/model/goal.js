// @flow

import type Big from 'big.js';
import type { Deadline } from './deadline';

export type Goal = {|
  +id: number,
  +name: string,
  +amount: Big,
  +soFar: Big,
  +deadline: Deadline
|};
