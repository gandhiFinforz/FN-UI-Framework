import React from "react";
import "primeflex/primeflex.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";
import FNAutoComplete from "../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import { AppDispatch } from "../../store/store";
import { addToast } from "../../store/toastSlice";
import FNInput from "../../components/UIComponents/Form/FNInput/FNInput";
import FNTextArea from "../../components/UIComponents/Form/FNTextArea/FNTextArea";
import FNButton from "../../components/UIComponents/Form/FNButton/FNButton";

interface PersonalInfoFormValues {
  firstName: string;
  lastName: string;
  email: string;
  userType: string;
  company: string;
  jobTitle: string;
}

interface PersonalInformationProps {
  onNext: () => void; // Callback function to handle next step
}

const userTypeOptions = [
  { label: "Owner", value: "Owner" },
  { label: "Community", value: "Community" },
  { label: "Admin User", value: "Admin User" },
  { label: "Tenant", value: "Tenant" },
];

const ContactInformation: React.FC<PersonalInformationProps> = ({ onNext }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const personalInfoFormik = useFormik<PersonalInfoFormValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      userType: "",
      jobTitle: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t("personalInformation.validation.firstNameRequired")),
      lastName: Yup.string().required(t("personalInformation.validation.lastNameRequired")),
      email: Yup.string()
        .required(t("personalInformation.validation.emailRequired"))
        .email(t("personalInformation.validation.invalidEmail")),
      company: Yup.string().required(t("personalInformation.validation.companyRequired")),
      userType: Yup.string().required(t("personalInformation.validation.userTypeRequired")),
      jobTitle: Yup.string().required(t("personalInformation.validation.jobTitleRequired")),
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

  const alphabetRegexPattern = /^[a-zA-Z\s]*$/;

  return (
    <div className="pl-6 pr-6 mt-2">
      {/* <h3 className="text-center">{t("personalInformation.title")}</h3> */}
      <form
        onSubmit={personalInfoFormik.handleSubmit}
        className="grid"
      >
        <div className="mb-1 col-12 md:col-6">
          <FNInput
            type="text"
            name="firstName"
            label="First Name"
            keyfilter={alphabetRegexPattern}
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
        <div className="mb-1 col-12 md:col-6">
          <FNInput
            type="text"
            name="lastName"
            label="Last Name"
            keyfilter={alphabetRegexPattern}
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
        <div className="mb-1 col-12 md:col-6">
          <FNInput
            type="text"
            name="company"
            label="Company"
            keyfilter={alphabetRegexPattern}
            value={personalInfoFormik.values.company}
            onChange={personalInfoFormik.handleChange}
            onBlur={personalInfoFormik.handleBlur}
            invalid={
              personalInfoFormik.touched.company &&
              !!personalInfoFormik.errors.company
            }
            helpText={
              personalInfoFormik.touched.company &&
              personalInfoFormik.errors.company
            }
            placeholder={t("personalInformation.placeHolder.company")}
          />
        </div>
        <div className="mb-1 col-12 md:col-6">
          <FNInput
            type="text"
            name="jobTitle"
            label="Job Title"
            keyfilter={alphabetRegexPattern}
            value={personalInfoFormik.values.jobTitle}
            onChange={personalInfoFormik.handleChange}
            onBlur={personalInfoFormik.handleBlur}
            invalid={
              personalInfoFormik.touched.jobTitle &&
              !!personalInfoFormik.errors.jobTitle
            }
            helpText={
              personalInfoFormik.touched.jobTitle &&
              personalInfoFormik.errors.jobTitle
            }
            placeholder={t("personalInformation.placeHolder.jobTitle")}
          />
        </div>
        <div className="mb-1 col-12 md:col-6">
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
        <div className="mb-1 col-12 md:col-6">
          <FNAutoComplete
            label="User Type"
            suggestions={userTypeOptions}
            value={personalInfoFormik.values.userType}
            dropdown
            onSelect={(e: { value: { label: any; }; }) =>
              personalInfoFormik.setFieldValue("userType", e.value.label)
            }
            onBlur={() => personalInfoFormik.setFieldTouched("userType", true)}
            field="label"
            invalid={
              personalInfoFormik.touched.userType &&
              !!personalInfoFormik.errors.userType
            }
            helpText={
              personalInfoFormik.touched.userType &&
              personalInfoFormik.errors.userType
            }
            placeholder={t("personalInformation.placeHolder.userType")}
          />
        </div>
        
        <div className="mt-5 col-12">
          <div className="flex justify-content-end">
            <FNButton
              label="Cancel"
              type="button"
              className="w-full md:w-auto mr-3"
              onClick={() => navigate('/')} // or your desired route
            />
            <FNButton
              label="Save"
              type="submit"
              className="w-full md:w-auto"
              disabled={!personalInfoFormik.isValid}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactInformation;
