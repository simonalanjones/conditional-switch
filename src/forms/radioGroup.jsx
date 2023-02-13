import { useField } from "formik";
import Label from "./label";
import LabelHelper from "./labelHelper";
import ErrorText from "./errorText";
import RequiredMark from "./requiredMark";

const RadioGroup = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);
  const radios = options.map((option, index) => (
    <div key={index}>
      <div className="mb-1 flex items-center">
        <input
          className={
            meta.touched && meta.error ? "form-radio-error" : "form-radio-ok"
          }
          {...field}
          id={`${field.name}${index}`}
          data-testid={`${field.name}${option}`}
          name={field.name}
          value={option}
          type="radio"
          checked={meta.value === option}
        />

        <Label
          text={option}
          required={false}
          htmlFor={`${field.name}${index}`}
        />
      </div>
      {index === options.length - 1 && meta.touched && meta.error && (
        <ErrorText error={meta.error} />
      )}
    </div>
  ));

  return (
    <div>
      <p className="pb-2 text-sm font-medium text-gray-700">
        {label}
        {props.required && <RequiredMark />}
      </p>

      {radios}
      {props.labelHelper && <LabelHelper helperText={props.labelHelper} />}
    </div>
  );
};

export default RadioGroup;
