import React from "react";
import step4 from "../../../assets/img/step4.png";
import tick from "../../../assets/img/tick.png";
import FNCard from "../../../components/UIComponents/Panel/FNCard/FNCard";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";

const SuccessMessage: React.FC = () => {
  return (
    <div className="sm:col-12 md:col-6  ">
      <div className="align-items-center flex h-screen justify-content-center text-center">
        <div>
          <h2 className="text-center">Registartion Completed </h2>

          <img className="w-4 mb-5 md:inline-block hidden" src={tick} />

          <img className="w-18rem mb-5 md:hidden" src={step4} />
          <p>
            Congratulations! Your registration has been completed successfully.
            You are now part of our community.
          </p>
          <FNButton className="mt-2" label={"Go to Dashboard"}></FNButton>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
