import React from "react";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNFileUpload from "../../../components/UIComponents/Form/FNFileUpload/FNFileUpload";
import "./documentUpload.css";
interface BankProps {
  onNext: () => void; // Callback function to handle next step
}
const DocumentUpload: React.FC<BankProps> = ({ onNext }) => {
  return (
    <div className="p-6 justify-content-center col-12 md:col-7">
      <div>
        <h3 className="text-center">Document Upload</h3>
        <FNFileUpload name={""} mode={"advanced"} />
        <div className="mt-5">
          <FNButton
            label="Next"
            type="submit"
            className="w-full"
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
