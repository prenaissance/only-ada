import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  color?: string;
}

const Button = ({ variant = "solid", color = "black", ...rest }: Props, ref: React.Ref<HTMLButtonElement>) => {
  return (
    <button
      className="p-2 rounded-3xl no-underline"
      style={{ color, border: `2px solid ${color}` }}
      {...rest}
      ref={ref}
    />
  );
};

export default React.forwardRef(Button);
