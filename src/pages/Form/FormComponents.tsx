import React from "react";
import FNCard from "../../components/Panel/FNCard/FNCard";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FNButton from "../../components/Form/FNButton/FNButton";
import FNCheckbox from "../../components/Form/FNCheckbox/FNCheckbox";
import FNInput from "../../components/Form/FNInput/FNInput";
import FNDate from "../../components/Form/FNDate/FNDate";
import FNTextArea from "../../components/Form/FNTextArea/FNTextArea";
import FNFileUpload from "../../components/Form/FNFileUpload/FNFileUpload";

const FormComponents: React.FC = () => {
  const { loading, error } = useSelector((state: RootState) => state.auth);

  interface LoginFormValues {
    text: string;
    password: string;
    checkbox: boolean;
    date: Date;
    textarea: string;
    fileupload: string;
  }

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      text: "",
      password: "",
      checkbox: false,
      date: new Date(),
      textarea: "",
      fileupload: "",
    },
    validationSchema: Yup.object({
      text: Yup.string().required("Text is required"),
      password: Yup.string().required("Password is required"),
      checkbox: Yup.boolean().oneOf([true], "Checkbox is required"),
      date: Yup.date().required("Date is required"),
      textarea: Yup.string().required("Textarea is required"),
      fileupload: Yup.string().required("File is required"),
    }),
    onSubmit: (values) => {
      console.log("############  Form Component Values ->", values);
    },
  });

  const handleFileUpload = (e: any) => {
    const file = e.files[0];
    if (file) {
      formik.setFieldValue("fileupload", file.objectURL);
    }
  };

  const handleFileRemove = () => {
    formik.setFieldValue("fileupload", "");
  };

  const children = (
    <div className="login-form">
      <form onSubmit={formik.handleSubmit} className="formgrid grid">
        <div className="field col-4">
          <FNInput
            type="text"
            name="text"
            label="Text"
            value={formik.values.text}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={formik.touched.text && !!formik.errors.text}
            helpText={formik.touched.text && formik.errors.text}
          />
        </div>
        <div className="field col-4">
          <FNInput
            type="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={formik.touched.password && !!formik.errors.password}
            helpText={formik.touched.password && formik.errors.password}
          />
        </div>
        <div className="field col-4">
          <FNDate
            inputId="fn-date"
            name="date"
            showButtonBar={true}
            hideOnDateTimeSelect={true}
            value={formik.values.date}
            label="Date"
            onChangeEvent={formik.handleChange}
            onBlurEvent={formik.handleBlur}
            className=""
          />
        </div>

        <div className="field col-6">
          <FNFileUpload
            name="fileupload"
            label="File Upload"
            previewWidth={50}
            multiple={true}
            maxFileSize={1000000}
            mode="advanced"
            value={formik.values.fileupload}
            onUpload={handleFileUpload}
            onSelect={handleFileUpload}
            onRemove={handleFileRemove}
            helpText={formik.touched.fileupload ? formik.errors.fileupload : ""}
          />
        </div>
        <div className="field col-6">
          <FNTextArea
            rows={8}
            name="textarea"
            label="Textarea"
            value={formik.values.textarea}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={formik.touched.textarea && !!formik.errors.textarea}
            helpText={formik.touched.textarea && formik.errors.textarea}
          />
        </div>
        <div className="field col-4">
          <FNCheckbox
            inputId="rememberMeCheckbox"
            name="checkbox"
            value={formik.values.checkbox}
            label="Checkbox"
            checked={formik.values.checkbox}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {error && <div className="col-span-3 text-red-400">{error}</div>}

        <div className="field col-12 text-right">
          <FNButton
            label="Submit"
            type="submit"
            className="mt-3"
            loading={loading}
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );

  return (
    <>
      <FNCard title="User Form Components" children={children} />
    </>
  );
};

export default FormComponents;
