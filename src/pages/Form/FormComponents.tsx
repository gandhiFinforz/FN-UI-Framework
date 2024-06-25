import React, { useState } from "react";
import FNCard from "../../components/Panel/FNCard/FNCard";
import { error } from "cypress/types/jquery";
import { t } from "i18next";
import FNButton from "../../components/Form/FNButton/FNButton";
import FNCheckbox from "../../components/Form/FNCheckbox/FNCheckbox";
import FNInput from "../../components/Form/FNInput/FNInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/authSlice";
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
            checkbox: Yup.string().required("Checkbox is required"),
            date: Yup.string().required("Date is required"),
            textarea: Yup.string().required("Textarea is required"),
            fileupload: Yup.string().required("File is required"),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });


    const children = <div className="login-form">
        <form onSubmit={formik.handleSubmit}>
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

            <FNCheckbox
                inputId="rememberMeCheckbox"
                name="checkbox"
                value={formik.values.checkbox}
                label="Checkbox"
                checked={formik.values.checkbox}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2"
            />

            <FNDate
                inputId="fn-date"
                name="date"
                hideOnDateTimeSelect={true}
                value={formik.values.date}
                label="Date"
                onSelect={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mt-2"
            />

            <FNTextArea
                name="textarea"
                label="textarea"
                value={formik.values.textarea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                invalid={formik.touched.textarea && !!formik.errors.textarea}
                helpText={formik.touched.textarea && formik.errors.textarea}
            />

            <FNFileUpload
                name="fileupload"
                label="fileupload"
                mode="basic"
                value={formik.values.fileupload}
                onUpload={formik.handleChange}
                onRemove={formik.handleBlur}
                helpText={formik.touched.fileupload ? formik.errors.fileupload : ""}
            />


            {error && <div className="error text-red-400">{error}</div>}

            <FNButton
                label="Login"
                type="submit"
                className="mt-3"
                loading={loading}
                disabled={loading}
            />
        </form>
    </div>
    return (
        <>
            <FNCard title="User Form Components" children={children} />
        </>
    );
};

export default FormComponents;
