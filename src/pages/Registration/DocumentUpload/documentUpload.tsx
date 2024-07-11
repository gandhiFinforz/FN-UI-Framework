import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNFileUpload from "../../../components/UIComponents/Form/FNFileUpload/FNFileUpload";
import "./documentUpload.css";
const DocumentUpload: React.FC = () => {
  return (
    <div className="grid justify-content-center">
      <div>
        <h3 className="text-center">Document Upload</h3>
        <FNFileUpload name={""} mode={"advanced"} />
        <div className="col-12 sm:col-12 mt-5">
          <FNButton label="Next" type="submit" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
