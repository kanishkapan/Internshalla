import React from "react";
import { useNavigate } from "react-router-dom";

const IntroScreen = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/create-account");
  };

  const handleLogin = () => {
    navigate("/login");
  };


  return (
    <div className="min-h-screen flex flex-col justify-end bg-[#f9f9f9] px-6 pb-10">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-[#1D1D1F] mb-2">
          Welcome to PopX
        </h1>
        <p className="text-sm text-[#6B6B6B] mb-6">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>
        <button
          onClick={handleCreateAccount}
          className="w-full bg-[#6C47FF] text-white font-semibold py-3 rounded-md mb-4 hover:opacity-90 transition duration-300 ease-in-out"
        >
          Create Account
        </button>
        <button  onClick={handleLogin} className="w-full bg-[#EDE5FF] text-[#6C47FF] font-semibold py-3 rounded-md hover:opacity-90 transition duration-300 ease-in-out">
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
