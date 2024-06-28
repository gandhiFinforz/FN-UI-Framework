import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNCheckbox from "../../../components/UIComponents/Form/FNCheckbox/FNCheckbox";
import FNInput from "../../../components/UIComponents/Form/FNInput/FNInput";
import FNOtpInput from "../../../components/UIComponents/Form/FNOtpInput/FNOtpInput";
import FNCard from "../../../components/UIComponents/Panel/FNCard/FNCard";

const LoginForm: React.FC = () => {
    const { loading, error } = useSelector((state: RootState) => state.auth);

    interface LoginFormValues {
        loginId: string;
        password: string;
        otp: string;
        rememberMe: boolean;
    }

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

    return (
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
}

export default LoginForm