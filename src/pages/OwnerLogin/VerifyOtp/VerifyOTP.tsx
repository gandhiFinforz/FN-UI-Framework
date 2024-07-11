import React, { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import "../Style.css";
import FNOtpInput from "../../../components/UIComponents/Form/FNOtpInput/FNOtpInput";
import { useLocation, useNavigate } from "react-router-dom";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import { t } from "i18next";

const VerifyOTP: React.FC = () => {
  const location = useLocation();
  const [phone, setPhone] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [loading, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.phone) {
      setPhone(location.state.phone);
    }
  }, [location.state]);

  const handleContinue = () => {
    setStatus(true);
  };

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

  const handleGoBack = () => {
    navigate("/owner-login/request-otp");
  };

  return (
    <div className="lg:grid xl:grid md:grid flex lg:flex-row xl:flex-row md:flex-row flex-column h-screen bg-white">
      <div className="lg:col-6 xl:col-6 md:col-6 flex justify-content-center align-items-center">
        <img
          src="src/assets/img/verify-otp.jpg"
          alt="Verify"
          className="max-w-full object-cover md:h-auto"
        />
      </div>

      <div className="lg:col-6 xl:col-6 md:col-6 flex flex-column p-3 pt-0 md:p-5 mt-0 md:mt-6 flex-1">
        <div
          className="text-center text-lg	 p-p-4 mb-3"
          style={{ color: "#000" }}
        >
          {t("ownerLoginPage.verificationHint")}
          <div className="user-number mt-1 font-semibold">+{phone}</div>
        </div>

        <FNOtpInput name="otp" value="" style={{ gap: "0.6rem" }} />

        <FNButton
          onClick={handleContinue}
          label={t("ownerLoginPage.verifyButtonLabel")}
          type="submit"
          className="w-full mt-3 p-3"
          loading={loading}
        />

        <div
          className="flex-initial flex align-items-center justify-content-between mt-4"
          style={{ color: "#000" }}
        >
          <div>
            <span
              onClick={handleGoBack}
              className="back-button font-medium cursor-pointer"
            >
              <i className="pi pi-arrow-left pr-1"></i>
              {t("ownerLoginPage.backButton")}
            </span>
          </div>
          <div className="resend-otp">
            <div>
              {isResendDisabled ? (
                <span className="opacity-50">
                  {t("ownerLoginPage.resendOTPLabel")} in {resendTimer}s
                </span>
              ) : (
                <span
                  onClick={handleResendOTP}
                  className="font-semibold resend-btn cursor-pointer	"
                  style={{ color: "#01499d" }}
                >
                  {t("ownerLoginPage.resendOTPLabel")}
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
