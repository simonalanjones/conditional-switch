import { useState, useEffect, useRef } from "react";
import { Formik, Form, useFormikContext } from "formik";
import * as Yup from "yup";
import DependantCheck from "../../components/dependantCheck";
import SubscriberCheck from "../../components/subscriberCheck";
import TextInput from "../textInput";
import DateInput from "../dateInput";
import SelectOptions from "../selectOptions";
import Button from "../button";

function MemberFields(props) {
  //console.log(props);
  const [formRelation, setFormRelation] = useState("");
  const [disclaimerChecked, setDisclaimerChecked] = useState(false);

  const ref = null; //useRef();
  // used to track whether we are inputting a subscriber or dependant
  // the disclosure box will appear based on this value
  // as Formik change handler is already taken, we will observe the value changes
  const FormObserver = () => {
    const { values } = useFormikContext();
    useEffect(() => {
      // used to track changes in the relation field
      if (formRelation !== values.relation) {
        if (values.relation === "") {
          setFormRelation("");
        } else {
          setFormRelation(
            values.relation === "Main subscriber" ? "subscriber" : "dependant"
          );
        }
      }
    }, [values]);
    return null;
  };

  let relationOptions = [
    "Main subscriber",
    "Male dependant",
    "Female dependant",
    "Male child",
    "Female child",
    "Other",
  ];

  // if flag received to exclude main subscriber from relation options
  // update the relation array to remove it
  if (props.hasSubscriber) {
    relationOptions = relationOptions.filter(
      (element) => element !== "Main subscriber"
    );
  }

  let titleOptions = ["Mr", "Mrs", "Miss", "Master", "Other"];

  const initialValues =
    props.data !== undefined && Object.keys(props.data).length > 0
      ? props.data
      : {
          userFirstName: "",
          userLastName: "",
          relation: "",
          title: "",
          phoneNumber: "",
          dateOfBirth: "",
        };

  useEffect(() => {
    if (initialValues.userFirstName !== "") {
      enableSubmit(true);
    }
  }, [initialValues.userFirstName]);

  const handleCancel = props.handleCancel;
  const handleSubmit = props.postback;

  function enableSubmit(state) {
    setDisclaimerChecked(state);
  }

  //   useEffect(() => {
  //     if (!props.data) {
  //       ref.current.focus();
  //     }
  //   }, [props]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        userFirstName: Yup.string().required("First name required"),
        userLastName: Yup.string().required("Last name required"),
        relation: Yup.string()
          .oneOf(relationOptions, "Invalid relation")
          .required("Relation required"),
        title: Yup.string()
          .oneOf(titleOptions, "Invalid title")
          .required("Title required"),
        phoneNumber: Yup.string(),
        dateOfBirth: Yup.date().required("Date of birth required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
      }}
    >
      <Form className="mx-auto w-full max-w-2xl">
        <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
          <div className="pt-8">
            <div className="px-8 ">
              <FormObserver />

              <div className="grid grid-cols-2 gap-6 mb-6">
                <TextInput
                  ref={ref}
                  label="First name"
                  name="userFirstName"
                  type="text"
                />
                <TextInput label="Last name" name="userLastName" type="text" />

                <DateInput
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                />
                <TextInput
                  label="Telephone No."
                  name="phoneNumber"
                  type="text"
                />

                <SelectOptions
                  name="title"
                  label="Title"
                  id="title"
                  options={titleOptions}
                />

                <SelectOptions
                  name="relation"
                  label="Relation"
                  id="relation"
                  options={relationOptions}
                />
              </div>
              {formRelation === "subscriber" && (
                <SubscriberCheck
                  callback={enableSubmit}
                  checked={disclaimerChecked}
                />
              )}
              {formRelation === "dependant" && (
                <DependantCheck
                  callback={enableSubmit}
                  checked={disclaimerChecked}
                />
              )}
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-8 mt-8">
              <Button
                label="Submit"
                type="primary"
                disabled={!disclaimerChecked}
              />
              &nbsp;
              <Button label="Cancel" type="secondary" />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default MemberFields;
