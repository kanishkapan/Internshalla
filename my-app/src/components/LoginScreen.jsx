import React from "react";

const LoginScreen = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] px-6 py-10 md:py-16 lg:py-20">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-[22px] md:text-2xl font-semibold text-[#1D1D1F] leading-tight mb-2">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-sm text-[#6B6B6B] mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, <br className="block md:hidden" />
          consectetur adipiscing elit,
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#6C47FF] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-4 py-3 border border-[#CFCFCF] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#6C47FF] mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border border-[#CFCFCF] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D3D3D3] text-white font-semibold py-3 rounded-md cursor-not-allowed text-sm"
            disabled
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
