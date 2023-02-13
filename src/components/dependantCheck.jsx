import { useRef, useEffect } from "react";

export default function DependantCheck({ callback, checked }) {
  const checkbox1 = useRef();
  const checkbox2 = useRef();

  // can pre-check the checkboxes if in checked param
  //   useEffect(() => {
  //     checkbox1.current.checked = checked;
  //     checkbox2.current.checked = checked;
  //   }, [checked]);

  // return a truth value based on both checkboxes checked
  const handleChange = (e) => {
    callback(checkbox1.current.checked && checkbox2.current.checked);
  };

  return (
    <div className="px-6 py-6 text-sm rounded-md bg-amber-200/50 border-amber-200 mt-8 mb-8 border">
      <p className="text-left uppercase text-amber-700 font-semibold pb-3">
        READ TO SUBSCRIBER:
      </p>
      <div className="flex items-center gap-3 mb-1">
        <blockquote className="text-base text-amber-700 italic leading-relaxed">
          &ldquo;Do you have the permission of dependant to disclose their
          medical history?&rdquo;
        </blockquote>

        <input
          ref={checkbox1}
          type="checkbox"
          className="border-amber-700 border rounded-sm"
          onChange={handleChange}
          data-testid="firstDisclaimerCheckboxDependant"
        />
      </div>

      <div className="flex items-center gap-3">
        <blockquote className="text-base text-amber-700 italic leading-relaxed">
          &ldquo;Do you have full knowledge of their medical history?&rdquo;
        </blockquote>
        <input
          ref={checkbox2}
          type="checkbox"
          className="border-amber-700 border rounded-sm"
          onChange={handleChange}
          data-testid="secondDisclaimerCheckboxDependant"
        />
      </div>
    </div>
  );
}
