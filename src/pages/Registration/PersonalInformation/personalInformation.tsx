import React from "react";
import FNAutoComplete from "../../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNInput from "../../../components/UIComponents/Form/FNInput/FNInput";
import FNTextArea from "../../../components/UIComponents/Form/FNTextArea/FNTextArea";
import "primeflex/primeflex.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { addToast } from "../../../store/toastSlice";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

interface PersonalInfoFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string,
  country: string;
  state: string;
  city: string;
  address: string;
  pincode: string;
}

interface PersonalInformationProps {
  onNext: () => void; // Callback function to handle next step
}

const countryOptions = [
  { label: "India", value: "India" },
  { label: "USA", value: "USA" },
  { label: "Canada", value: "Canada" },
  { label: "Singapore", value: "Singapore" },
];

const stateOptions = [
  { label: "Tamil Nadu", value: "Tamil Nadu" },
  { label: "Punjab", value: "Punjab" },
  { label: "Andhra Pradesh", value: "Andhra Pradesh" },
  { label: "Karnataka", value: "Karnataka" },
];

const cityOptions = [
  { label: "Trichy", value: "Trichy" },
  { label: "Chennai", value: "Chennai" },
  { label: "Salem", value: "Salem" },
  { label: "Coimbatore", value: "Coimbatore" },
];

const PersonalInformation: React.FC<PersonalInformationProps> = ({ onNext }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const personalInfoFormik = useFormik<PersonalInfoFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      city: "",
      state: "",
      country: "",
      address: "",
      pincode: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t("personalInformation.validation.firstNameRequired")),
      lastName: Yup.string().required(t("personalInformation.validation.lastNameRequired")),
      email: Yup.string()
        .required(t("personalInformation.validation.emailRequired"))
        .email(t("personalInformation.validation.invalidEmail")),
      password: Yup.string().required(t("personalInformation.validation.passwordRequired")),
      city: Yup.string().required(t("personalInformation.validation.cityRequired")),
      state: Yup.string().required(t("personalInformation.validation.stateRequired")),
      country: Yup.string().required(t("personalInformation.validation.countryRequired")),
      address: Yup.string().required(t("personalInformation.validation.addressRequired")),
      pincode: Yup.string()
        .required(t("personalInformation.validation.pincodeRequired"))
        .matches(/^\d{6}$/, t("personalInformation.validation.invalidPincode")),
    }),
    onSubmit: (values) => {
      dispatch(
        addToast({
          id: new Date().getTime(),
          message: t("personalInformation.msg.success"),
          severity: "success",
        })
      );
      onNext();
    },
  });

  return (
    <div className="pl-6 pr-6 justify-content-center mt-2 col-12 md:col-7">
      <div>
        <h3 className="text-center">{t("personalInformation.title")}</h3>
        <form
          onSubmit={personalInfoFormik.handleSubmit}
          className="flex flex-column flex-grow-1"
        >
          <div className="mb-1">
            <FNInput
              type="text"
              name="firstName"
              label="First Name"
              value={personalInfoFormik.values.firstName}
              onChange={personalInfoFormik.handleChange}
              onBlur={personalInfoFormik.handleBlur}
              invalid={
                personalInfoFormik.touched.firstName &&
                !!personalInfoFormik.errors.firstName
              }
              helpText={
                personalInfoFormik.touched.firstName &&
                personalInfoFormik.errors.firstName
              }
              placeholder={t("personalInformation.placeHolder.firstName")}
            />
          </div>
          <div className="mb-1">
            <FNInput
              type="text"
              name="lastName"
              label="Last Name"
              value={personalInfoFormik.values.lastName}
              onChange={personalInfoFormik.handleChange}
              onBlur={personalInfoFormik.handleBlur}
              invalid={
                personalInfoFormik.touched.lastName &&
                !!personalInfoFormik.errors.lastName
              }
              helpText={
                personalInfoFormik.touched.lastName &&
                personalInfoFormik.errors.lastName
              }
              placeholder={t("personalInformation.placeHolder.lastName")}
            />
          </div>
          <div className="mb-1">
            <FNInput
              type="text"
              name="email"
              label="Email"
              value={personalInfoFormik.values.email}
              onChange={personalInfoFormik.handleChange}
              onBlur={personalInfoFormik.handleBlur}
              invalid={
                personalInfoFormik.touched.email &&
                !!personalInfoFormik.errors.email
              }
              helpText={
                personalInfoFormik.touched.email &&
                personalInfoFormik.errors.email
              }
              placeholder={t("personalInformation.placeHolder.email")}
            />
          </div>
          <FNInput
              type="password"
              name="password"
              label="Password"
              value={personalInfoFormik.values.password}
              onChange={personalInfoFormik.handleChange}
              onBlur={personalInfoFormik.handleBlur}
              invalid={
                personalInfoFormik.touched.password &&
                !!personalInfoFormik.errors.password
              }
              helpText={
                personalInfoFormik.touched.password &&
                personalInfoFormik.errors.password
              }
              placeholder={t("personalInformation.placeHolder.password")}
            />
          <div className="mb-1">
            <FNAutoComplete
              label="Country"
              suggestions={countryOptions}
              value={personalInfoFormik.values.country}
              onSelect={(e) =>
                personalInfoFormik.setFieldValue("country", e.value.label)
              }
              onBlur={() => personalInfoFormik.setFieldTouched("country", true)}
              field="label"
              invalid={
                personalInfoFormik.touched.country &&
                !!personalInfoFormik.errors.country
              }
              helpText={
                personalInfoFormik.touched.country &&
                personalInfoFormik.errors.country
              }
              placeholder={t("personalInformation.placeHolder.country")}
            />
          </div>
          <div className="mb-1">
            <FNAutoComplete
              suggestions={stateOptions}
              name="state"
              label="State"
              value={personalInfoFormik.values.state}
              onSelect={(e) =>
                personalInfoFormik.setFieldValue("state", e.value.label)
              }
              onBlur={() => personalInfoFormik.setFieldTouched("state", true)}
              field="label"
              invalid={
                personalInfoFormik.touched.state &&
                !!personalInfoFormik.errors.state
              }
              helpText={
                personalInfoFormik.touched.state &&
                personalInfoFormik.errors.state
              }
              placeholder={t("personalInformation.placeHolder.state")}
            />
          </div>
          <div className="mb-1">
            <FNAutoComplete
              suggestions={cityOptions}
              name="city"
              label="City"
              value={personalInfoFormik.values.city}
              onSelect={(e) =>
                personalInfoFormik.setFieldValue("city", e.value.label)
              }
              onBlur={() => personalInfoFormik.setFieldTouched("city", true)}
              field="label"
              invalid={
                personalInfoFormik.touched.city &&
                !!personalInfoFormik.errors.city
              }
              helpText={
                personalInfoFormik.touched.city &&
                personalInfoFormik.errors.city
              }
              placeholder={t("personalInformation.placeHolder.city")}
            />
          </div>
          <div className="mb-1">
            <FNTextArea
              name="address"
              label="Address"
              value={personalInfoFormik.values.address}
              onChange={personalInfoFormik.handleChange}
              onBlur={personalInfoFormik.handleBlur}
              invalid={
                personalInfoFormik.touched.address &&
                !!personalInfoFormik.errors.address
              }
              helpText={
                personalInfoFormik.touched.address &&
                personalInfoFormik.errors.address
              }
              placeholder={t("personalInformation.placeHolder.address")}
            />
          </div>
          <div className="mb-1">
            <FNInput
            type="number"
              name="pincode"
              label="Pincode"
              value={personalInfoFormik.values.pincode}
              onChange={personalInfoFormik.handleChange}
              onBlur={personalInfoFormik.handleBlur}
              invalid={
                personalInfoFormik.touched.pincode &&
                !!personalInfoFormik.errors.pincode
              }
              helpText={
                personalInfoFormik.touched.pincode &&
                personalInfoFormik.errors.pincode
              }
              placeholder={t("personalInformation.placeHolder.pincode")}
            />
          </div>
          <div className="mt-2">
            <FNButton
              label="Next"
              type="submit"
              className="w-full"
              disabled={!personalInfoFormik.isValid}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
