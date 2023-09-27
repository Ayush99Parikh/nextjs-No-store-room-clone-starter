import * as React from "react";
import { Edit, SimpleForm, EditProps, DateInput, TextInput } from "react-admin";

export const IntervalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateInput label="Expiry Date" source="expiryDate" />
        <TextInput label="Subscription Type" source="subscriptionType" />
      </SimpleForm>
    </Edit>
  );
};
