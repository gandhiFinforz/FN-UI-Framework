import React, { useState } from "react";
import FNSteps, {
  FNOptionStepsProps,
} from "../../components/UIComponents/Menu/FNSteps/FNSteps";
import BankInformation from "./BankInformation/bankInformation";
import PersonalInformation from "./PersonalInformation/personalInformation";
import { StepsSelectEvent } from "primereact/steps";
import DocumentUpload from "./DocumentUpload/documentUpload";
import SuccessMessage from "./SuccessMessage/successMessage";

const mockStepsModel: FNOptionStepsProps[] = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
  { label: "Step 4" },
];

const Registration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (event: StepsSelectEvent) => {
    console.log("stepIndex", event.index);
    setCurrentStep(event.index);
  };

  return (
    <div className="p-3">
      <FNSteps
        model={mockStepsModel}
        initialIndex={0}
        onSelect={handleStepChange}
      />
      {currentStep === 0 && <PersonalInformation />}
      {currentStep === 1 && <BankInformation />}
      {currentStep === 2 && <DocumentUpload />}
      {currentStep === 3 && <SuccessMessage />}
    </div>
  );
};

export default Registration;
