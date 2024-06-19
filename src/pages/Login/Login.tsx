// src/components/Login.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import FNButton from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import { loginUser } from "../../store/authSlice";
import { AppDispatch, RootState } from "../../store/store";
import { Card } from "primereact/card";
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/react";
import { t } from "i18next";
import TextAreaField from "../../components/InputTextAreaField/InputTextAreaField";

interface LoginFormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      username: "",
      password: "",
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
            <InputField
              type="text"
              name="username"
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={formik.touched.username && !!formik.errors.username}
              helpText={formik.touched.username && formik.errors.username}
            />
            <InputField
              type="password"
              name="password"
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              invalid={formik.touched.password && !!formik.errors.password}
              helpText={formik.touched.password && formik.errors.password}
            />
            <TextAreaField
             
             name="username"
             label="Username"
             value={formik.values.username}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             invalid={formik.touched.username && !!formik.errors.username}
             helpText={formik.touched.username && formik.errors.username}
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
