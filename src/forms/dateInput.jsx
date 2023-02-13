import { useField, Field } from "formik";
import Label from "./label";
import LabelHelper from "./labelHelper";
import ErrorText from "./errorText";

const DateInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <Label
        text={label}
        required={props.required}
        htmlFor={props.id || props.name}
      />
      <Field
        type="date"
        autoComplete="false"
        className={
          meta.touched && meta.error ? "form-input-error" : "form-input-ok"
        }
        id={field.name}
        name={field.name}
        value={field.value || ""}
      />

      {props.labelHelper && <LabelHelper helperText={props.labelHelper} />}
      {meta.touched && meta.error && <ErrorText error={meta.error} />}
    </div>
  );
};

export default DateInput;
