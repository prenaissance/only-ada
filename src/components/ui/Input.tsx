import React from "react";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  valid: boolean;
  error: string;
};

const Input = (props: Props, ref: React.Ref<HTMLInputElement>) => {
  return (
    <input
      className="shadow-md rounded-lg h-8 bg-gray-50 text-black px-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      ref={ref}
    />
  );
};

export default React.forwardRef(Input);
