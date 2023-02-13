import RequiredMark from "./requiredMark";

const Label = ({ text, required, htmlFor }) => (
  <label className="form-label" htmlFor={htmlFor}>
    {text}
    {required && <RequiredMark />}
  </label>
);

export default Label;
