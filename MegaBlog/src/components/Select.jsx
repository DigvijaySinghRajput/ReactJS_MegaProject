import React, { useId } from "react";

const Select = React.forwardRef(function Select(
  { options, label, className = "", ...props },
  ref
) {
  const Id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={Id}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={Id}
        ref={ref}
        className={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}
      >
        {options?.map((options) => (
          <option key={options} value={options}>
            {options}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
