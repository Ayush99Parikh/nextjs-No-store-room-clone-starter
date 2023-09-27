import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  TextInput,
} from "react-admin";

export const IntervalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput label="Expiry Date" source="expiryDate" />
        <TextInput label="Subscription Type" source="subscriptionType" />
      </SimpleForm>
    </Create>
  );
};
