import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNPhoneInput from "../../../components/UIComponents/Form/FNPhoneInput/FNPhoneInput";
import { t } from "i18next";
import otpRequestImage from "../../../assets/img/property-landing.jpg";
import PhoneNumbers from "../PhoneNumbers";

const RequestOTP: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [showHelpText, setShowHelpText] = useState(false);
  const [loading, setStatus] = useState(false);
  const navigate = useNavigate();
  const [showPhoneComponent, setShowPhoneComponent] = useState(false);

  const handleOnChange = (value: string) => {
    console.log("clcikkkk");
    setPhone(value);
    setShowHelpText(false);
  };

  const handleContinue = () => {
    setStatus(true);
    if (!phone) {
      setShowHelpText(true);
      setStatus(false);
    } else {
      navigate("/owner-login/verify-otp", { state: { phone } });
      setStatus(false);
      setShowHelpText(false);
    }
  };
  const handleSelectNumber = (selectedNumber: string) => {
    setPhone(selectedNumber);
    setShowHelpText(false);
    setStatus(false);
  };

  const handleSimDetection = () => {
    if (!showPhoneComponent) {
      setShowPhoneComponent(true);
    }
  };
  return (
    <div className="lg:grid xl:grid md:grid xl:grid flex lg:flex-row xl:flex-row md:flex-row flex-column h-screen bg-white ">
      {showPhoneComponent && (
        <PhoneNumbers onSelectNumber={handleSelectNumber} />
      )}
      <div className="lg:col-6 xl:col-6  md:col-6 flex justify-content-center align-items-center">
        <img
          src={otpRequestImage}
          alt="Property"
          className="max-w-full object-cover h-full"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="lg:col-6 xl:col-6 md:col-6 flex flex-column  p-3 md:p-5 mt-0 xl:mt-8 lg:mt-8 md:mt-8 flex-1 relative">
        <div
          className="text-center text-2xl font-semibold line-height-3 p-4"
          style={{ color: "#000" }}
        >
          {t("ownerLoginPage.title")}
        </div>
        <div className="lg:mx-8 xl:mx-8 md:mx-8 ">
          <div className="flex align-items-center w-full mt-3 mb-5">
            <span className="line-through flex-1 border-bottom-1 border-300"></span>
            <span
              className="mx-2 opacity-60 font-medium"
              style={{ color: "#000" }}
            >
              {t("ownerLoginPage.loginLabel")}
            </span>
            <span className="line-through flex-1 border-bottom-1 border-300"></span>
          </div>

          <FNPhoneInput
            value={phone}
            onFocus={handleSimDetection}
            onChange={handleOnChange}
            placeholder={t("ownerLoginPage.otpRequestInputPlaceholder")}
            inputProps={{
              required: true,
              id: "phone-input",
            }}
            helpText={t("ownerLoginPage.phoneNumberInput")}
            variant="outlined"
            showHelpText={showHelpText}
          />

          <div className="xl:mt-8 lg:mt-8 md:mt-8">
            <FNButton
              onClick={handleContinue}
              label={t("ownerLoginPage.otpRequestButtonLabel")}
              type="submit"
              className="w-full mt-3 p-3"
              loading={loading}
            />

            <div
              className="text-center opacity-60 line-height-2 font-medium text-sm mb-4 absolute bottom-0 left-0 w-full"
              style={{ color: "#000" }}
            >
              <div>{t("ownerLoginPage.termsAndCondition")}</div>
              <div>
                <span className="underline mx-1">
                  {t("ownerLoginPage.termsService")}
                </span>
                <span className="underline mx-1">
                  {t("ownerLoginPage.privacyPolicy")}
                </span>
                <span className="underline mx-1">
                  {t("ownerLoginPage.contentPolicy")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestOTP;
