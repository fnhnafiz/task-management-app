import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { user, signInWithGoogle } = useContext(AuthContext);
  console.log("i am from login------------", user);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      console.log("User logged in!");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Task Management App</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
