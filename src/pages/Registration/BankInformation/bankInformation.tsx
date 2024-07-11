import FNAutoComplete from "../../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNInput from "../../../components/UIComponents/Form/FNInput/FNInput";
import "./bankInformation.css";

const bank = [
  { label: "SBI", value: "SBI" },
  { label: "HDFC", value: "HDFC" },
];

const accountType = [
  { label: "Savings", value: "Savings" },
  { label: "Current", value: "Current" },
];

const BankInformation: React.FC = () => {
  return (
    <div className="grid justify-content-center" style={{ height: "90vh" }}>
      <div className="col-12 sm:col-8 md:col-6 flex flex-column">
        <h3 className="text-center">Bank Account</h3>
        <div className="mb-2">
          <FNAutoComplete
            label="Select Bank"
            suggestions={bank}
            placeholder="Select Your Bank"
          />
        </div>
        <div className="mb-2">
          <FNInput
            type="text"
            name="accNumber"
            label="Account Number"
            placeholder="Enter Account Number"
          />
        </div>
        <div className="mb-2">
          <FNInput
            type="text"
            name="name"
            label="Account Name"
            placeholder="Enter Account Name"
          />
        </div>
        <div className="mb-2">
          <FNAutoComplete
            suggestions={accountType}
            label="Account Type"
            placeholder="Select Account Type"
          />
        </div>
        <div className="mt-auto">
          <FNButton label="Next" type="submit" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default BankInformation;
