import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type IntervalWhereInput = {
  expiryDate?: DateTimeFilter;
  id?: StringFilter;
  subscriptionType?: StringFilter;
};
