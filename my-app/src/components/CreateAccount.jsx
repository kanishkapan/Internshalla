import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccountScreen = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    console.log("User Data:", formData);
    navigate("/account-settings");
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] px-6 py-10 md:py-16 lg:py-20">
      <div className="max-w-md w-full mx-auto">
        <h2 className="text-[22px] md:text-2xl font-semibold text-[#1D1D1F] leading-tight mb-4">
          Create your <br /> PopX account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "Full Name", name: "fullName", required: true },
            { label: "Phone number", name: "phoneNumber", required: true },
            { label: "Email address", name: "email", required: true },
            { label: "Password", name: "password", required: true },
            { label: "Company name", name: "companyName", required: false },
          ].map(({ label, name, required }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-[#6C47FF] mb-1">
                {label}
                {required && <span className="text-[#FF0000]"> *</span>}
              </label>
              <input
                type={name === "password" ? "password" : "text"}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required={required}
                className="w-full px-4 py-3 border border-[#CFCFCF] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#6C47FF]"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-[#1D1D1F] mb-2">
              Are you an Agency?<span className="text-[#FF0000]"> *</span>
            </label>
            <div className="flex gap-6 items-center">
              {["yes", "no"].map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm font-medium text-[#1D1D1F]">
                  <input
                    type="radio"
                    name="agency"
                    value={option}
                    checked={formData.agency === option}
                    onChange={handleChange}
                    className="accent-[#6C47FF] w-4 h-4"
                  />
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#6C47FF] text-white font-semibold py-3 rounded-md text-sm"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountScreen;
