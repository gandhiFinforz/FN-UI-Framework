import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNInput from "../../../components/UIComponents/Form/FNInput/FNInput";
import FNCard from "../../../components/UIComponents/Panel/FNCard/FNCard";
import FNDate from "../../../components/UIComponents/Form/FNDate/FNDate";

const SignupForm: React.FC = () => {
  const { loading, error } = useSelector((state: RootState) => state.auth);

  interface SignupFormValues {
    firstName: string,
    lastName: string,
    dob: Date,
    email: string,
    phone: string,
    password: string,
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

  return (
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
}

export default SignupForm