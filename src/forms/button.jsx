import React from "react";

const classes = {
  primary:
    "rounded-md border border-transparent bg-blue-700 py-2 px-4 text-sm font-medium leading-5 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-800",
  secondary:
    "rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-5 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 hover:bg-gray-50",
};

const classesDisabled = {
  primary:
    "rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium leading-5 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-not-allowed",
};

const getClassName = (type, disabled) => {
  if (disabled) {
    return type in classesDisabled
      ? classesDisabled[type]
      : classesDisabled["primary"];
  } else {
    return type in classes ? classes[type] : classes["primary"];
  }
};

const Button = ({ label = "Submit", type = "primary", disabled }) => (
  <button
    type="submit"
    className={getClassName(type, disabled)}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
