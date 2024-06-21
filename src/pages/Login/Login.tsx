// src/components/Login.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import FNButton from "../../components/Form/FNButton/FNButton";
import FNInput from "../../components/Form/FNInput/FNInput";
import FNCheckbox from "../../components/Form/FNCheckbox/FNCheckbox";
import { loginUser } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Card } from "primereact/card";
import { t } from "i18next";

interface LoginFormValues {
  username: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });

  return (
    <div className="flex align-items-center justify-content-center h-screen">
      <Card title={t("loginPage.title")} className="p-fluid md:col-4">
        <div className="login-form">
          <form onSubmit={formik.handleSubmit}>
            <FNInput
              type="text"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={formik.touched.username && !!formik.errors.username}
              helpText={formik.touched.username && formik.errors.username}
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
              name="rememberMe"
              value={formik.values.rememberMe}
              label={t("loginPage.checkboxLabel")}
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2"
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
      </Card>
    </div>
  );
};

export default Login;
