import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const SubmitButton = ({ children, ...rest }: Props) => {
  return (
    <button className="bg-orange-800 rounded-lg uppercase" type="submit" {...rest}>
      {children}
    </button>
  );
};

export default SubmitButton;
