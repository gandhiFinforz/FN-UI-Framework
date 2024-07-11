import React from "react";
import FNAutoComplete from "../../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNInput from "../../../components/UIComponents/Form/FNInput/FNInput";
import FNTextArea from "../../../components/UIComponents/Form/FNTextArea/FNTextArea";
import "primeflex/primeflex.css";
import "./personalInformation.css";

const countryOptions = [
  { label: "India", value: "India" },
  { label: "USA", value: "USA" },
  { label: "Canada", value: "Canada" },
  { label: "Singapore", value: "Singapore" },
];

const stateOptions = [
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Punjab", value: "Punjab" },
  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  { label: "Karnataka", value: "Karnataka" },
];

const cityOptions = [
  { label: "Trichy", value: "Trichy" },
  { label: "Chennai", value: "Chennai" },
  { label: "Salem", value: "Salem" },
  { label: "Coimbatore", value: "Coimbatore" },
];

const PersonalInformation: React.FC = () => {
  const handleCountrySelect = (e: any) => {
    console.log("Selected Country:", e.value);
    // Handle country selection logic here
  };

  return (
    <div className="grid justify-content-center" style={{ height: "90vh" }}>
      <div className="col-12 sm:col-8 md:col-6 flex flex-column">
        <h3 className="text-center">Personal Information</h3>

        <div className="mb-2">
          <FNInput
            type="text"
            name="name"
            label="Name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-2">
          <FNInput
            type="text"
            name="email"
            label="Email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-2">
          <FNAutoComplete
            label="Country"
            suggestions={countryOptions}
            onSelect={handleCountrySelect}
            placeholder="Select Country"
          />
        </div>
        <div className="mb-2">
          <FNAutoComplete
            suggestions={stateOptions}
            name="state"
            label="State"
            placeholder="Select State"
          />
        </div>
        <div className="mb-2">
          <FNAutoComplete
            suggestions={cityOptions}
            name="city"
            label="City"
            placeholder="Select City"
          />
        </div>
        <div className="mb-2">
          <FNTextArea
            name="address"
            label="Address"
            placeholder="Enter Your Address"
          />
        </div>

        <div className="mt-auto">
          <FNButton label="Next" type="submit" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
