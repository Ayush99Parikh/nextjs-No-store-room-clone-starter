import { IntervalWhereInput } from "./IntervalWhereInput";
import { IntervalOrderByInput } from "./IntervalOrderByInput";

export type IntervalFindManyArgs = {
  where?: IntervalWhereInput;
  orderBy?: Array<IntervalOrderByInput>;
  skip?: number;
  take?: number;
};
