import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type props = UseFormRegisterReturn &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & {
    label?: string;
    error?: string;
  };

const index = React.forwardRef(({ label, error, ...props }: props, ref) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && <span>{label}</span>}
      <input
        className={`w-full ${
          error &&
          "border-red-500 ring-red-500 focus-within:border-red-500 focus-within:ring-red-500 placeholder:text-red-500 "
        }`}
        type="text"
        ref={ref}
        {...props}
      />
      {error && <span className="text-red-500 font-bold">{error}</span>}
    </div>
  );
});

export default index;
