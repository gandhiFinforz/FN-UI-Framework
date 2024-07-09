import React, { useRef, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import FNButton from "../../components/UIComponents/Form/FNButton/FNButton";

const PropertyLogin: React.FC = () => {
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
      // If phone number is not entered, show error message
      setErrorMessage("Please enter your mobile number");
      setStatus(false);
    } else {
      navigate("/verify-otp", { state: { phone } }); // Navigate to the verify-otp page
      setStatus(false);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img
          src="src\assets\img\property-landing.jpg"
          alt="Property"
          className="property-image"
        />
      </div>
      <div className="form-container">
        <div className="hint">
          India's #1 Property and Utilities Management App
        </div>
        <div className="line-container">
          <span className="line-text">Log in or sign up</span>
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
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <FNButton
          onClick={handleContinue}
          label="Request OTP"
          type="submit"
          className="w-full mt-3 p-3"
          loading={loading}
        />
      </div>

      <div className="footer">
        <div> By continuing, you agree to our</div>
        <div>
          <span className="link">Terms of Service</span>
          <span className="link">Privacy Policy</span>
          <span className="link">Content Policy</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyLogin;
