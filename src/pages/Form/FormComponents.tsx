import React from "react";
import FNCard from "../../components/UIComponents/Panel/FNCard/FNCard";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import FNButton from "../../components/UIComponents/Form/FNButton/FNButton";
import FNCheckbox from "../../components/UIComponents/Form/FNCheckbox/FNCheckbox";
import FNInput from "../../components/UIComponents/Form/FNInput/FNInput";
import FNDate from "../../components/UIComponents/Form/FNDate/FNDate";
import FNTextArea from "../../components/UIComponents/Form/FNTextArea/FNTextArea";
import FNFileUpload from "../../components/UIComponents/Form/FNFileUpload/FNFileUpload";
import FNTabs, { FNTab } from "../../components/UIComponents/Panel/FNTab/FNTab";
import FNOtpInput from "../../components/UIComponents/Form/FNOtpInput/FNOtpInput";
import FNAutoComplete from "../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import FNTextEditor from "../../components/UIComponents/Form/FNTextEditor/FNTextEditor";
import FNRadioField from "../../components/UIComponents/Form/FNRadio/FNRadio";


const FormComponents: React.FC = () => {
    const { loading, error } = useSelector((state: RootState) => state.auth);

    interface SignupFormValues {
        firstName: string,
        lastName: string,
        dob: Date,
        email: string,
        phone: string,
        password: string,
    }

    interface LoginFormValues {
        loginId: string;
        password: string;
        otp: string;
        rememberMe: boolean;
    }

    interface OtherFormValues {
        autoComplete: any;
        radio: string;
        editor: string;
        textarea: string;
        fileupload: string;
    }

    const signupFormik = useFormik<SignupFormValues>({
        initialValues: {
            firstName: "",
            lastName: "",
            dob: new Date(),
            email: "",
            phone: "",
            password: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required"),
            dob: Yup.string().required("User DOB is required"),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            phone: Yup.string()
                .matches(/^[0-9]{10}$/, "Phone Number must be exactly 10 digits")
                .required("Phone Number is required"),
            password: Yup.string().required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log("############  Signup Form Values ->", values);
        },
    });

    const loginFormik = useFormik<LoginFormValues>({
        initialValues: {
            loginId: "",
            password: "",
            otp: "",
            rememberMe: false,
        },
        validationSchema: Yup.object({
            loginId: Yup.string().required("Login Id is required"),
            password: Yup.string().required("Password is required"),
            otp: Yup.string().required("Please enter the received OTP"),
            rememberMe: Yup.boolean(),
        }),
        onSubmit: (values) => {
            console.log("############  Login Form Values ->", values);
        },
    });

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

    const signupElement = (
      <div className="signup-form mx-auto w-4">
        <FNCard>
          <h4 className="m-0 mb-2 text-lg font-bold">Sign Up</h4>
          <h6 className="m-0 mb-2 text-sm font-light">Please enter your details</h6>
          <form onSubmit={signupFormik.handleSubmit} className="grid">
            <div className="col-12">
              <FNInput
                type="text"
                name="firstName"
                label="First Name"
                value={signupFormik.values.firstName}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                invalid={
                  signupFormik.touched.firstName &&
                  !!signupFormik.errors.firstName
                }
                helpText={
                  signupFormik.touched.firstName &&
                  signupFormik.errors.firstName
                }
              />
            </div>
            <div className="col-12">
              <FNInput
                type="text"
                name="lastName"
                label="Last Name"
                value={signupFormik.values.lastName}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                invalid={
                  signupFormik.touched.lastName &&
                  !!signupFormik.errors.lastName
                }
                helpText={
                  signupFormik.touched.lastName && signupFormik.errors.lastName
                }
              />
            </div>
            <div className="col-12">
              <FNDate
                inputId="fn-date"
                name="dob"
                showButtonBar={true}
                hideOnDateTimeSelect={true}
                value={signupFormik.values.dob}
                label="Date"
                onChangeEvent={signupFormik.handleChange}
                onBlurEvent={signupFormik.handleBlur}
                className=""
                invalid={signupFormik.touched.dob && !!signupFormik.errors.dob}
                helpText={
                  signupFormik.touched.dob &&
                  typeof signupFormik.errors.dob === "string"
                    ? signupFormik.errors.dob
                    : undefined
                }
              />
            </div>
            <div className="col-12">
              <FNInput
                type="email"
                name="email"
                label="Email"
                value={signupFormik.values.email}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                invalid={
                  signupFormik.touched.email && !!signupFormik.errors.email
                }
                helpText={
                  signupFormik.touched.email && signupFormik.errors.email
                }
              />
            </div>
            <div className="col-12">
              <FNInput
                type="number"
                name="phone"
                label="Phone Number"
                value={signupFormik.values.phone}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                invalid={
                  signupFormik.touched.phone && !!signupFormik.errors.phone
                }
                helpText={
                  signupFormik.touched.phone && signupFormik.errors.phone
                }
              />
            </div>
            <div className="col-12">
              <FNInput
                type="password"
                name="password"
                label="Password"
                value={signupFormik.values.password}
                onChange={signupFormik.handleChange}
                onBlur={signupFormik.handleBlur}
                invalid={
                  signupFormik.touched.password &&
                  !!signupFormik.errors.password
                }
                helpText={
                  signupFormik.touched.password && signupFormik.errors.password
                }
              />
            </div>

            {error && <div className="col-span-3 text-red-400">{error}</div>}

            <div className="col-12 text-center">
              <FNButton
                label="Register"
                type="submit"
                className="mt-3"
                loading={loading}
                disabled={loading}
              />
            </div>
          </form>
        </FNCard>
      </div>
    );

    const loginElement = (
        <div className="login-form mx-auto w-4 ">
            <FNCard>
                <form onSubmit={loginFormik.handleSubmit} className="grid">
                    <div className="col-12">
                        <FNInput
                            type="text"
                            name="loginId"
                            label="User Name"
                            value={loginFormik.values.loginId}
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            invalid={loginFormik.touched.loginId && !!loginFormik.errors.loginId}
                            helpText={loginFormik.touched.loginId && loginFormik.errors.loginId}
                        />
                    </div>
                    <div className="col-12">
                        <FNInput
                            type="password"
                            name="password"
                            label="Password"
                            value={loginFormik.values.password}
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            invalid={loginFormik.touched.password && !!loginFormik.errors.password}
                            helpText={loginFormik.touched.password && loginFormik.errors.password}
                        />
                    </div>
                    <div className="col-12">
                        <FNOtpInput
                            name="otp"
                            label="MFA"
                            value={loginFormik.values.otp}
                            onChange={(e) => { loginFormik.setFieldValue('otp', e.value) }}
                            onBlur={loginFormik.handleBlur}
                            invalid={loginFormik.touched.otp && !!loginFormik.errors.otp}
                            helpText={loginFormik.touched.otp && loginFormik.errors.otp}
                        />
                    </div>
                    <div className="col-12">
                        <FNCheckbox
                            inputId="rememberMeCheckbox"
                            name="rememberMe"
                            value={loginFormik.values.rememberMe}
                            label="Remember Me"
                            className="mt-4"
                            checked={loginFormik.values.rememberMe}
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                        />
                    </div>

            {error && <div className="col-span-3 text-red-400">{error}</div>}

            <div className="col-12 text-center">
              <FNButton
                label="Login"
                type="submit"
                className="w-full"
                loading={loading}
                disabled={loading}
              />
            </div>
          </form>
        </FNCard>
      </div>
    );

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

    const otherFormElements = (
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

    const userFormTabs: FNTab[] = [
        {
            header: "Sign Up",
            content: signupElement,
        },
        {
            header: "Login",
            content: loginElement,
        },
        {
            header: "Form Components",
            content: otherFormElements,
        },
    ];

    return <FNTabs tabs={userFormTabs} />;
};

export default FormComponents;
