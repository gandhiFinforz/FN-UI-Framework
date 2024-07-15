import React, { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // PrimeReact core CSS
import "primeicons/primeicons.css"; // PrimeIcons
import "primeflex/primeflex.css"; // PrimeFlex
import "./Register.css"; // Custom styles for the illustration and other elements
import step1 from "../../assets/img/step1.png";
import PersonalInformation from "./PersonalInformation/personalInformation";
import { StepsSelectEvent } from "primereact/steps";
import BankInformation from "./BankInformation/bankInformation";
import DocumentUpload from "./DocumentUpload/documentUpload";
import SuccessMessage from "./SuccessMessage/successMessage";
import FNSteps, { FNOptionStepsProps } from "../../components/UIComponents/Menu/FNSteps/FNSteps";


const mockStepsModel: FNOptionStepsProps[] = [
  { label: "Step 1" },
  { label: "Step 2" },
  { label: "Step 3" },
];
const Register: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const handleStepChange = (event: StepsSelectEvent | { index: number }) => {
    const stepIndex = event.index;
    setCurrentStep(stepIndex);
  };
  const handleNext = () => {
    handleStepChange({ index: currentStep + 1 });
  };
  return (
    <div className="row flex-none md:flex h-screen ">
      <div className="sm:col-12 md:col-6 bg-blue-500 md:block hidden ">
        <div className="align-items-center flex h-screen justify-content-center">
          <div>
            <h2 className="text-center text-white">
              Start Your Step {currentStep + 1}
            </h2>
            <img className="w-29rem mb-5" src={step1} />
            <p className="text-white p-3 font-bold">
              Begin your journey with us to discover your amazing application
              !...
            </p>
          </div>
        </div>
      </div>

      <div className="sm:col-12 md:col-6 h-screen">
        <div className="mt-4">
       { currentStep != 3 && <FNSteps
        model={mockStepsModel}
        initialIndex={currentStep}
        onSelect={handleStepChange}
      />}
        </div>
      
        <div className="md:align-items-center flex justify-content-center">
        {currentStep === 0 && <PersonalInformation onNext={handleNext} />}
        {currentStep === 1 && <BankInformation onNext={handleNext} />}
        {currentStep === 2 && <DocumentUpload onNext={handleNext} />}
        {currentStep === 3 && <SuccessMessage />}
        </div>
        
      </div>
    </div>
  );
};

export default Register;
