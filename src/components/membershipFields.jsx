import React from "react";
import { Formik, Form } from "formik";
import RadioGroup from "../forms/radioGroup";
import TextInput from "../forms/textInput";
import DateInput from "../forms/dateInput";
import Button from "../forms/button";
import * as Yup from "yup";

function MembershipFields(props) {
  const switchFromOptions = ["CREST", "HARPA", "Competitor Switch"];

  const dateToday = () => {
    var date = new Date();
    var today = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];
    return today;
  };

  const handleSubmitFunction = props.handleSubmit;
  const handleCancelFunction = props.handleCancel;

  const initialValues =
    props.data !== undefined && Object.keys(props.data).length > 0
      ? props.data
      : {
          membershipNumber: "",
          dateCompleted: dateToday(),
          memberSwitchFrom: "",
        };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        membershipNumber: Yup.string().required("Membership Number required"),
        dateCompleted: Yup.string().required("Completed Date required"),
        memberSwitchFrom: Yup.string()
          .oneOf(switchFromOptions, "Invalid switch")
          .required("Switch from required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmitFunction(values);
      }}
    >
      <Form className="mx-auto w-full max-w-lg py-12">
        <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
          <div className="pt-8">
            <div className="px-8 space-y-6">
              <TextInput
                label="Existing Membership No."
                name="membershipNumber"
                type="text"
              />
              <DateInput
                label="Date completed"
                name="dateCompleted"
                type="date"
              />
              <RadioGroup
                name="memberSwitchFrom"
                label="Member switching from"
                options={switchFromOptions}
              />
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-8 mt-8">
              <Button label="Submit" type="primary" />
              &nbsp;&nbsp;
              <Button
                label="Cancel"
                type="secondary"
                onClick={handleCancelFunction}
              />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default MembershipFields;
