import Input from "@components/ui/Input";
import SubmitButton from "@components/ui/SubmitButton";
import React, { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button, InputLabel } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onMoveToRegister?: () => void;
};
// Define a zod schema for the form data
const OtpDataSchema = z.object({
  email: z.string().email(),
  otp: z.string().regex(/^[0-9]{6}$/),
});

type OtpData = z.infer<typeof OtpDataSchema>;

const FirstStageForm = () => {
  // Use the useForm hook to initialize the form, passing zodResolver as a parameter
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpData>({
    resolver: zodResolver(OtpDataSchema),
  });

  // Define a function to handle form submission
  const onSubmit: SubmitHandler<OtpData> = async data => {
    // The form data will automatically be validated using zodResolver
    console.log("Form is valid! Submitting...");
  };

  return (
    <form className="flex flex-col items-center">
      <InputLabel htmlFor="email">Email</InputLabel>
      <TextField sx={{}} {...register("email")} inputRef={register("email").ref} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <Button
        onClick={handleSubmit(onSubmit)}
        type="submit"
        variant="contained"
        color="primary"
        sx={{ mt: "0.5rem", alignSelf: "stretch" }}
      >
        Get OTP
      </Button>
    </form>
  );
};
const LoginForm = ({ onMoveToRegister }: Props) => {
  const [isSecondStage, setIsSecondStage] = useState(false);
  return isSecondStage ? <div>SecondStage</div> : <FirstStageForm />;
};

export default LoginForm;
