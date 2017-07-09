// @flow

import { fromName } from "./month";
import type { Month } from "./month";

export type Deadline = {|
  +month: Month,
  +year: number
|};

export function fromMonthYearString(str: string): Deadline {
  const split = str.split(" ");

  return {
    month: fromName(split[0]),
    year: parseInt(split[1])
  };
}
