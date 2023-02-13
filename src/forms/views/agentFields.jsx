import { Formik, Form } from "formik";
import RadioGroup from "../radioGroup";
import TextInput from "../textInput";
import Button from "../button";
import * as Yup from "yup";

const AgentFields = (props) => {
  const deptOptions = ["Retention", "Acquisition"];
  const initialValues =
    props.data !== undefined && Object.keys(props.data).length > 0
      ? props.data
      : {
          agentName: "",
          agentEmail: "",
          agentDept: "",
        };
  const handleSubmitFunction = props.handleSubmit;
  const handleCancelFunction = props.handleCancel;
  const ref = null; //useRef();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        agentName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Agent Name required"),
        agentEmail: Yup.string()
          .email("Invalid email address")
          .required("Agent Email required"),
        agentDept: Yup.string()
          .oneOf(deptOptions, "Invalid dept")
          .required("Agent Dept required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmitFunction(values);
      }}
    >
      <Form className="py-12 mx-auto w-full max-w-lg">
        <div className="shadow sm:overflow-hidden sm:rounded-md bg-white">
          <div className="pt-8">
            <div className="px-8 space-y-6">
              <TextInput
                ref={ref}
                label="Agent name"
                name="agentName"
                type="text"
              />
              <TextInput label="Agent email" name="agentEmail" type="email" />
              <RadioGroup
                name="agentDept"
                label="Agent dept"
                options={deptOptions}
              />
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-8 mt-8">
              <Button label="Submit" type="primary" />
              &nbsp;
              <Button label="Cancel" type="secondary" />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AgentFields;
