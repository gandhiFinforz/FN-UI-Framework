import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNAutoComplete from "../../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import FNFileUpload from "../../../components/UIComponents/Form/FNFileUpload/FNFileUpload";
import FNRadioField from "../../../components/UIComponents/Form/FNRadio/FNRadio";
import FNTextArea from "../../../components/UIComponents/Form/FNTextArea/FNTextArea";
import FNTextEditor from "../../../components/UIComponents/Form/FNTextEditor/FNTextEditor";
import { addToast } from "../../../store/toastSlice";

const OtherForm: React.FC = () => {
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    interface OtherFormValues {
        autoComplete: any;
        radio: string;
        editor: string;
        textarea: string;
        fileupload: string;
    }

    const otherFormik = useFormik<OtherFormValues>({
        initialValues: {
            autoComplete: "",
            radio: "",
            editor: "",
            textarea: "",
            fileupload: "",
        },
        validationSchema: Yup.object({
            autoComplete: Yup.object().required("Country is required"),
            radio: Yup.string().required("Please select option"),
            editor: Yup.string().required("Please enter your content"),
            textarea: Yup.string().required("Please enter address"),
            fileupload: Yup.string().required("Please upload a file"),
        }),
        onSubmit: (values) => {
            dispatch(addToast({ id: new Date().getTime(), message: 'Submit Submitted Successfully !', severity: 'success' }));
            console.log("############  Other Form Values ->", values);
        },
    });

    const handleFileUpload = (e: any) => {
        const file = e.files[0];
        if (file) {
            otherFormik.setFieldValue("fileupload", file.objectURL);
        }
    };

    const handleFileRemove = () => {
        otherFormik.setFieldValue("fileupload", "");
    };

    const suggestions = [
        { label: 'United States', value: 'US' },
        { label: 'Canada', value: 'CA' },
        { label: 'Mexico', value: 'MX' },
        { label: 'United Kingdom', value: 'UK' },
        { label: 'Germany', value: 'DE' },
        { label: 'France', value: 'FR' },
        { label: 'Japan', value: 'JP' },
        { label: 'China', value: 'CN' },
        { label: 'India', value: 'IN' },
        { label: 'Australia', value: 'AU' },
    ];

    const radioOptions = [
        { label: 'Yes', value: 'Yes', Checked: true },
        { label: 'No', value: 'No', Checked: false }
    ]

    return (
        <div className="login-form">
            <form onSubmit={otherFormik.handleSubmit} className="grid">
                <div className="col-4">
                    <FNAutoComplete
                        label="Country"
                        className="w-full"
                        suggestions={suggestions}
                        value={otherFormik.values.autoComplete}
                        onSelect={(e) =>
                            otherFormik.setFieldValue("autoComplete", e.value)
                        }
                        onBlur={() => otherFormik.setFieldTouched("autoComplete", true)}
                        field="label"
                        invalid={
                            otherFormik.touched.autoComplete &&
                            !!otherFormik.errors.autoComplete
                        }
                        helpText={
                            otherFormik.touched.autoComplete &&
                            otherFormik.errors.autoComplete
                        }
                        placeholder="Select a Value"
                        minLength={1}
                    />
                </div>
                <div className="col-4 my-auto">
                    <FNRadioField
                        options={radioOptions}
                        className=""
                        label="Are you resident of India?"
                        name="radio"
                        initialValue={"Yes"}
                        value={otherFormik.values.radio}
                        onChange={otherFormik.handleChange}
                        onBlur={otherFormik.handleBlur}
                    />
                </div>

                <div className="col-6">
                    <FNTextArea
                        rows={9}
                        name="textarea"
                        label="Address"
                        value={otherFormik.values.textarea}
                        onChange={otherFormik.handleChange}
                        onBlur={otherFormik.handleBlur}
                        invalid={
                            otherFormik.touched.textarea && !!otherFormik.errors.textarea
                        }
                        helpText={
                            otherFormik.touched.textarea && otherFormik.errors.textarea
                        }
                    />
                </div>
                <div className="col-6">
                    <FNFileUpload
                        name="fileupload"
                        label="Selfi Upload"
                        previewWidth={50}
                        multiple={true}
                        maxFileSize={1000000}
                        mode="advanced"
                        value={otherFormik.values.fileupload}
                        onUpload={handleFileUpload}
                        onSelect={handleFileUpload}
                        onRemove={handleFileRemove}
                        helpText={
                            otherFormik.touched.fileupload
                                ? otherFormik.errors.fileupload
                                : ""
                        }
                    />
                </div>
                <div className="col-12">
                    <FNTextEditor
                        name="editor"
                        id="text-editor-com"
                        label="Blog Content"
                        value={otherFormik.values.editor}
                        onTextChange={(e) =>
                            otherFormik.setFieldValue("editor", e.htmlValue)
                        }
                        onBlur={() => otherFormik.setFieldTouched("editor", true)}
                        helpText={
                            otherFormik.touched.editor ? otherFormik.errors.editor : ""
                        }
                    />
                </div>
                {error && <div className="col-span-3 text-red-400">{error}</div>}

                <div className="col-12 text-right">
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
}

export default OtherForm