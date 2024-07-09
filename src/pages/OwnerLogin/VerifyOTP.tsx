import React, { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import "./Style.css";
import FNOtpInput from "../../components/UIComponents/Form/FNOtpInput/FNOtpInput";
import { useLocation, useNavigate } from "react-router-dom";
import FNButton from "../../components/UIComponents/Form/FNButton/FNButton";

const VerifyOTP: React.FC = () => {
  const location = useLocation();
  const [phone, setPhone] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  useEffect(() => {
    if (location.state && location.state.phone) {
      setPhone(location.state.phone);
    }
  }, [location.state]);

  const handleContinue = () => {
    setStatus(true);
  };
  const [loading, setStatus] = useState(false);

  const handleResendOTP = () => {
    setResendTimer(30);
    setIsResendDisabled(true);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isResendDisabled) {
      timer = setInterval(() => {
        setResendTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(timer);
            setIsResendDisabled(false);
            return 30;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isResendDisabled]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/owner-login");
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img
          src="src/assets/img/verify-otp.jpg"
          alt="Verify"
          className="verify-otp-image"
        />
      </div>

      <div className="form-container">
        <div className="notify">
          We have sent a verification code to
          <div className="user-number">+{phone}</div>
        </div>
        <FNOtpInput
          name="otp"
          value=""
          label="MFA"
          style={{ height: "3rem", width: "3rem" }}
        />

        <FNButton
          onClick={handleContinue}
          label="Continue"
          type="submit"
          className="w-full mt-3 p-3"
          loading={loading}
        />

        <div className="flex resend-back-content">
          <div>
            <span onClick={handleGoBack} className="back-button">
              <i className="pi pi-arrow-left"></i>
              Back
            </span>
          </div>
          <div className="resend-otp">
            <div>
              {isResendDisabled ? (
                <span className="resend-text">
                  Resend OTP in {resendTimer}s
                </span>
              ) : (
                <span onClick={handleResendOTP} className="resend-button">
                  Resend OTP
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
