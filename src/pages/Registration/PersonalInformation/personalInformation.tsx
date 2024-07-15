import React from "react";
import FNAutoComplete from "../../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNInput from "../../../components/UIComponents/Form/FNInput/FNInput";
import FNTextArea from "../../../components/UIComponents/Form/FNTextArea/FNTextArea";
import "primeflex/primeflex.css";
import "./personalInformation.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { addToast } from "../../../store/toastSlice";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
interface PersonalInfoFormValues {
  name: string;
  email: string;
  country: string;
  state: string;
  city: string;
  address: string;
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

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  onNext,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const personalInfoFormik = useFormik<PersonalInfoFormValues>({
    initialValues: {
      name: "",
      email: "",
      city: "",
      state: "",
      country: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      city: Yup.string().required("City is required"),
      state: Yup.string().required("State is required"),
      country: Yup.string().required("Country is required"),
      address: Yup.string().required("Address is required"),
    }),
    onSubmit: (values) => {
      dispatch(
        addToast({
          id: new Date().getTime(),
          message: "Bank Details Added Successfully!",
          severity: "success",
        })
      );
      // navigate("/bankInfo")
      onNext();
    },
  });
  const handleCountrySelect = (e: any) => {
    console.log("Selected Country:", e.value.label);
    // Handle country selection logic here
  };

  return (
    <div className="p-6 justify-content-center  mt-2 col-12 md:col-7">
      <div>
        <h3 className="text-center">Personal Information</h3>
        <form
          onSubmit={personalInfoFormik.handleSubmit}
          className="flex flex-column flex-grow-1"
        >
          <div className="mb-2">
            <FNInput
              type="text"
              name="name"
              label="Name"
              value={personalInfoFormik.values.name}
              onChange={personalInfoFormik.handleChange}
              onBlur={personalInfoFormik.handleBlur}
              invalid={
                personalInfoFormik.touched.name &&
                !!personalInfoFormik.errors.name
              }
              helpText={
                personalInfoFormik.touched.name &&
                personalInfoFormik.errors.name
              }
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-2">
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
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-2">
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
              placeholder="Select Country"
            />
          </div>
          <div className="mb-2">
            <FNAutoComplete
              suggestions={stateOptions}
              name="state"
              label="State"
              value={personalInfoFormik.values.country}
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
              placeholder="Select State"
            />
          </div>
          <div className="mb-2">
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
              placeholder="Select City"
            />
          </div>
          <div className="mb-2">
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
              placeholder="Enter Your Address"
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
