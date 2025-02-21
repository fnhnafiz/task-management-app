import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import navlogo from "../../public/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  console.log("I am from navar", user);

  // const handleLogin = async () => {
  //   try {
  //     await signInWithGoogle();
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   }
  // };
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center">
          <img className="w-12" src={navlogo} alt="" />
          <h1 className="text-2xl font-bold text-green-600">
            Britix<span className="text-[#298ADE]">420</span>
          </h1>
        </div>
      </Link>
      {/* Login/Logout Button */}
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hello, {user?.displayName}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
