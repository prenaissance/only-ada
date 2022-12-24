import React, { useState } from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button, InputLabel } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosPublic } from "@api/axios-public";
import { useNavigate } from "react-router-dom";
import { useNotification } from "@components/NotificationProvider";

type Props = {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onMoveToRegister?: () => void;
};
// Define a zod schema for the form data
const OtpDataSchema = z.object({
  email: z.string().email(),
});

type OtpData = z.infer<typeof OtpDataSchema>;

const FirstStageForm = ({ onMoveStage }: { onMoveStage: (email: string) => void }) => {
  const { postNotification } = useNotification();
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
    try {
      const response = await axiosPublic.post("/users/send-otp", data);
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }
      onMoveStage(data.email);
      postNotification("OTP sent successfully", "success");
    } catch (err) {
      const error = err as Error;
      console.error(error);
      postNotification(`Login failed ${error.message}`, "error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <InputLabel htmlFor="email">Email</InputLabel>
      <TextField sx={{}} id="email" {...register("email")} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: "0.5rem", alignSelf: "stretch" }}>
        Get OTP
      </Button>
    </form>
  );
};

const LoginSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6),
  password: z
    .string()
    .min(6)
    .regex(/[a-z]/)
    .regex(/[A-Z]/)
    .regex(/[0-9]{2,}/),
});

type LoginData = z.infer<typeof LoginSchema>;

type LoginResponse = {
  token: string;
};

const SecondStageForm = ({ defaultEmail }: { defaultEmail: string }) => {
  const { postNotification } = useNotification();
  const navigate = useNavigate();
  const redirectTo = new URLSearchParams(window.location.search).get("redirectTo") || "/";
  const defaultValues = {
    email: defaultEmail,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginData> = async data => {
    try {
      const response = await axiosPublic.post<LoginResponse>("/users/login-otp", data);
      if (response.status !== 200) {
        throw new Error("Something went wrong");
      }
      localStorage.setItem("token", response.data.token);
      postNotification("Login successful", "success");
      navigate(redirectTo);
    } catch (err) {
      const error = err as Error;
      console.error(error);
      postNotification(`Login failed ${error.message}`, "error");
    }
  };

  return (
    // wet code
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <InputLabel htmlFor="email">Email</InputLabel>
      <TextField disabled id="email" {...register("email")} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <InputLabel htmlFor="otp">OTP</InputLabel>
      <TextField id="otp" {...register("otp")} />
      {errors.otp && <p className="text-red-500">{errors.otp.message}</p>}
      <InputLabel htmlFor="password">Password</InputLabel>
      <TextField type="password" id="password" {...register("password")} />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
      <Button type="submit" variant="contained" color="primary" sx={{ mt: "0.5rem", alignSelf: "stretch" }}>
        Login
      </Button>
    </form>
  );
};

const LoginForm = ({ onMoveToRegister }: Props) => {
  const [isSecondStage, setIsSecondStage] = useState(false);
  const [defaultEmail, setDefaultEmail] = useState("");

  const handleMoveStage = (email: string) => {
    setIsSecondStage(true);
    setDefaultEmail(email);
  };

  return (
    <>
      {isSecondStage ? (
        <SecondStageForm defaultEmail={defaultEmail} />
      ) : (
        <FirstStageForm onMoveStage={handleMoveStage} />
      )}
      <a className="cursor-pointer" onClick={onMoveToRegister}>
        Register instead
      </a>
    </>
  );
};

export default LoginForm;
