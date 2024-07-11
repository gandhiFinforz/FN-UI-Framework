import React from "react";
import check from "../../../assets/img/check.png";
import FNCard from "../../../components/UIComponents/Panel/FNCard/FNCard";

const SuccessMessage: React.FC = () => {
  return (
    <div className="grid p-4 justify-content-center">
      <FNCard className="mt-3">
        <div className="flex flex-column justify-content-between align-items-center mt-8 mb-8">
          <img src={check} className="w-5 mt-8" />
        </div>
        <h3 className="text-center mt-auto">
          Registration Completed Successfully !...
        </h3>
      </FNCard>
    </div>
  );
};

export default SuccessMessage;
