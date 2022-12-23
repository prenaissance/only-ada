import { useState, useCallback } from "react";

import LoginForm from "@features/auth/LoginForm";
import RegisterForm from "@features/auth/RegisterForm";

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleMoveToRegister = useCallback(() => {
    setIsRegistering(true);
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-hidden bg-[url(/backgrounds/login.jpg)] bg-cover">
      <div className="flex flex-col absolute items-center justify-center h-16 md:top-[40%] md:left-[15%] md:translate-x-0 top-6 left-1/2 -translate-x-1/2">
        <h1 className="text-4xl font-bold text-orange-900">Login to Only Ada</h1>
        <p className="text-white">Welcome or welcome back, anon</p>
        {isRegistering ? <RegisterForm /> : <LoginForm isSecondStage={false} onMoveToRegister={handleMoveToRegister} />}
      </div>
    </div>
  );
};

export default Login;
