import { Interval as TInterval } from "../api/interval/Interval";

export const INTERVAL_TITLE_FIELD = "subscriptionType";

export const IntervalTitle = (record: TInterval): string => {
  return record.subscriptionType?.toString() || String(record.id);
};
