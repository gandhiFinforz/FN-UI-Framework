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
    <div>
      <h3 className="text-center">Bank Account</h3>

      <div className="grid justify-content-center">
        <div className="col-12 md:col-4">
          <div className="grid">
            <div className="col-12 sm:col-12">
              <FNAutoComplete label="Select Bank" suggestions={bank} />
            </div>
            <div className="col-12 sm:col-12">
              <FNInput type="text" name="accNumber" label="Account Number" />
            </div>
            <div className="col-12 sm:col-12">
              <FNInput type="text" name="name" label="Account Name" />
            </div>

            <div className="col-12 sm:col-12">
              <FNAutoComplete suggestions={accountType} label="Account Type" />
            </div>
            <div className="col-12 sm:col-12 mt-5">
              <FNButton label="Next" type="submit" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInformation;
