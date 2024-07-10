import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import FNButton from "../../components/UIComponents/Form/FNButton/FNButton";

const OwnerLogin: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setStatus] = useState(false);

  const navigate = useNavigate();

  const handleOnChange = (value: string) => {
    setPhone(value);
    setErrorMessage("");
  };

  const handleContinue = () => {
    setStatus(true);
    if (!phone) {
      setErrorMessage("Please enter your mobile number");
      setStatus(false);
    } else {
      navigate("/verify-otp", { state: { phone } });
      setStatus(false);
    }
  };

  return (
    <div className="flex flex-column h-screen bg-white">
      <div className="flex justify-content-center align-items-center">
        <img
          src="src/assets/img/property-landing.jpg"
          alt="Property"
          className="max-w-full object-cover h-380px md:h-auto"
        />
      </div>
      <div className="flex flex-column p-3 md:p-5 mt-0 md:mt-6 flex-1">
        <div className="text-center text-2xl font-semibold line-height-3 p-4" style={{ color: "#000" }}>
          India's #1 Property and Utilities Management App
        </div>
        <div className="flex align-items-center w-full my-3 pb-3">
          <span className="line-through flex-1 border-bottom-1 border-300"></span>
          <span className="mx-2 opacity-60 font-medium" style={{ color: "#000" }}>Log in or sign up</span>
          <span className="line-through flex-1 border-bottom-1 border-300"></span>
        </div>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={handleOnChange}
          placeholder="Enter Mobile Number"
          inputProps={{
            required: true,
          }}
        />
        {errorMessage && <div className="text-red-500 mt-2 text-sm">{errorMessage}</div>}
        <FNButton
          onClick={handleContinue}
          label="Request OTP"
          type="submit"
          className="w-full mt-3 p-3"
          loading={loading}
        />
      </div>
      <div className="text-center opacity-60 line-height-2 font-medium text-sm mb-4 p-fixed-bottom left-0 w-full" style={{ color: "#000" }}>
        <div> By continuing, you agree to our</div>
        <div>
          <span className="underline mx-1">Terms of Service</span>
          <span className="underline mx-1">Privacy Policy</span>
          <span className="underline mx-1">Content Policy</span>
        </div>
      </div>
    </div>
  );
};

export default OwnerLogin;
