import { useField, Field } from "formik";
import ErrorText from "./errorText";

const SelectOptions = ({
  label,
  placeholder = "Select an option",
  options,
  ...props
}) => {
  const [field, meta] = useField(props);

  const choices = options.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  return (
    <div>
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      <Field
        className={
          meta.touched && meta.error ? "form-input-error" : "form-input-ok"
        }
        as="select"
        id={props.name}
        name={props.name}
      >
        <option value="">{placeholder}</option>
        {choices}
      </Field>
      {meta.touched && meta.error && <ErrorText error={meta.error} />}
    </div>
  );
};

export default SelectOptions;
