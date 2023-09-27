import { SortOrder } from "../../util/SortOrder";

export type IntervalOrderByInput = {
  createdAt?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  subscriptionType?: SortOrder;
  updatedAt?: SortOrder;
};
