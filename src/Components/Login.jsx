import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, signInWithGoogle, signIn } = useContext(AuthContext);
  // console.log("i am from login------------", user);
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      //User Login
      await signIn(email, password);

      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      // toast.error(err?.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      console.log("User logged in!");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome Back
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <span className="w-1/3 border-b border-gray-300"></span>
          <span className="text-gray-500 text-sm">or</span>
          <span className="w-1/3 border-b border-gray-300"></span>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            I don't have an account?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register Here
            </Link>
          </p>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          <svg
            className="w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.4 0 6.4 1.3 8.7 3.4l6.4-6.4C34.9 2.7 29.7 0 24 0 14.8 0 6.9 5.5 3 13.5l7.8 6C13.5 12 18.3 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.5 24c0-1.6-.1-3.2-.4-4.7H24v9h12.7c-.6 3.2-2.4 5.9-5 7.7l7.8 6c4.6-4.3 7-10.7 7-17z"
            />
            <path
              fill="#FBBC05"
              d="M10.8 28.5c-1.4-2.2-2.2-4.7-2.2-7.5 0-2.8.8-5.3 2.2-7.5l-7.8-6C1.1 11 0 14.4 0 18c0 3.6 1.1 7 3 9.5l7.8-6z"
            />
            <path
              fill="#4285F4"
              d="M24 48c6.5 0 12-2.1 16-5.5l-7.8-6c-2.2 1.5-5 2.3-8.2 2.3-5.6 0-10.3-3.5-12-8.3l-7.8 6c3.9 7 11.9 11.5 19.8 11.5z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
