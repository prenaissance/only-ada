import Input from "@components/ui/Input";
import SubmitButton from "@components/ui/SubmitButton";
import React from "react";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onMoveToRegister?: () => void;
  isSecondStage: boolean;
};

const LoginForm = ({ onSubmit, isSecondStage, onMoveToRegister }: Props) => {
  return (
    <form className="flex flex-col gap-1" onSubmit={onSubmit}>
      <label htmlFor="login-email"></label>
      <Input id="login-email" name="email" placeholder="Email" valid={true} error="" />
      <label htmlFor="login-password"></label>
      <Input id="login-password" name="password" placeholder="Password" valid={true} error="" />
      <SubmitButton onClick={() => {}}>Submit</SubmitButton>
      <a className="cursor-pointer hover:underline" onClick={onMoveToRegister}>
        Register
      </a>
    </form>
  );
};

export default LoginForm;
