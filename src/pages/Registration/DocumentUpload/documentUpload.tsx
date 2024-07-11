import React from "react";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNFileUpload from "../../../components/UIComponents/Form/FNFileUpload/FNFileUpload";
import "./documentUpload.css";

const DocumentUpload: React.FC = () => {
  return (
    <div className="grid justify-content-center" style={{ height: "90vh" }}>
      <div className="col-12 sm:col-8 md:col-6 flex flex-column">
        <h3 className="text-center">Document Upload</h3>
        <FNFileUpload name={""} mode={"advanced"} />
        <div className="mt-auto">
          <FNButton label="Next" type="submit" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
