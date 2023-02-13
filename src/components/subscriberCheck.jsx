import { useEffect, useRef } from "react";
export default function SubscriberCheck({ callback, checked }) {
  const checkbox1 = useRef();
  const handleChange = (e) => {
    callback(e.target.checked);
  };

  // can pre-check the checkbox if in checked param
  useEffect(() => {
    checkbox1.current.checked = checked;
  }, [checked]);

  return (
    <>
      <div className="px-6 py-6 text-sm rounded-md bg-amber-200/50 border-amber-200 mt-8 mb-8 border">
        <p className="text-left uppercase text-amber-700 font-semibold pb-3">
          READ TO SUBSCRIBER:
        </p>
        <blockquote className="text-base text-amber-700 mb-2 italic leading-relaxed">
          &ldquo;It is important to disclose all material facts and not doing so
          may result in claims not being paid or possibly a cancellation of your
          cover. If you have any doubt whether a fact would be important, please
          disclose it.&rdquo;
        </blockquote>

        <input
          type="checkbox"
          name="subscriber"
          className="border-amber-700 border rounded-sm"
          id="subscriber"
          onChange={handleChange}
          ref={checkbox1}
          data-testid="disclaimerCheckSubscriber"
        />
      </div>
    </>
  );
}
