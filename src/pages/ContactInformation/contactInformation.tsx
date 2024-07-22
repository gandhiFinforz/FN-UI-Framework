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
import FNCard from "../../components/UIComponents/Panel/FNCard/FNCard";
import { IonCol, IonRow } from "@ionic/react";
import "./contactInformation.css";
interface PersonalInfoFormValues {
  phone: string;
  mobile: string;
  email: string;
  userType: string;
  emailType: string;
  jobTitle: string;
}

interface PersonalInformationProps {
  onNext: () => void; // Callback function to handle next step
}

const emailType = [
  { label: "Primary", value: "Primary" },
  { label: "Secondary", value: "Secondary" },
];

const ContactInformation: React.FC<PersonalInformationProps> = ({ onNext }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const contactInfoFormik = useFormik<PersonalInfoFormValues>({
    initialValues: {
      phone: "",
      mobile: "",
      email: "",
      emailType: "",
      userType: "",
      jobTitle: ""
    },
    validationSchema: Yup.object({
      phone: Yup.string().required(t("personalInformation.validation.phoneRequired")),
      mobile: Yup.string().required(t("personalInformation.validation.mobileRequired")),
      email: Yup.string()
        .required(t("personalInformation.validation.emailRequired"))
        .email(t("personalInformation.validation.invalidEmail")),
      emailType: Yup.string().required(t("personalInformation.validation.emailTypeRequired")),
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
      <form
        onSubmit={contactInfoFormik.handleSubmit} className="p-2"
      >
       
        <FNCard className="bg-gray-100 mb-4 ">
        <span className="p-header">Phone</span>
        <div className="custom-hr mt-2 mb-2" ></div>
         <IonRow>
         <IonCol className="col-12 md:col-6">
          <FNInput
            type="number"
            name="mobile"
            label="Mobile Number"
            placeholder="Enter Mobile Number"
            value={contactInfoFormik.values.mobile}
            onChange={contactInfoFormik.handleChange}
            onBlur={contactInfoFormik.handleBlur}
            invalid={
              contactInfoFormik.touched.phone && !!contactInfoFormik.errors.mobile
            }
            helpText={
              contactInfoFormik.touched.phone && contactInfoFormik.errors.mobile
            }
          />
        </IonCol>
        <IonCol className="col-12 md:col-6">
          <FNInput
            type="number"
            name="phone"
            label="Phone Number"
            placeholder="Enter Phone Number"
            value={contactInfoFormik.values.phone}
            onChange={contactInfoFormik.handleChange}
            onBlur={contactInfoFormik.handleBlur}
            invalid={
              contactInfoFormik.touched.phone && !!contactInfoFormik.errors.phone
            }
            helpText={
              contactInfoFormik.touched.phone && contactInfoFormik.errors.phone
            }
          />
        </IonCol>
         </IonRow>
         <IonRow className="mt-1 cursor-pointer">
          <IonCol className="col-12 md:col-6 add-input-txt">
          <i
                className="pi pi-plus-circle cursor-pointer pr-1 font-bold"
              ></i>
         <span>Add Another</span> 
          </IonCol>
          </IonRow>
        </FNCard>
        <FNCard className="bg-gray-100 ">
        <span className="p-header">Email</span>
        <div className="custom-hr mt-2 mb-2" ></div>
<IonRow>
        <IonCol className="col-12 md:col-6">
          <FNAutoComplete
            label="Select Email Type"
            suggestions={emailType}
            value={contactInfoFormik.values.emailType}
            dropdown
            onSelect={(e) =>
              contactInfoFormik.setFieldValue("emailType", e.value.label)
            }
            onBlur={() => contactInfoFormik.setFieldTouched("emailType", true)}
            field="label"
            invalid={
              contactInfoFormik.touched.emailType && !!contactInfoFormik.errors.emailType
            }
            helpText={contactInfoFormik.touched.emailType && contactInfoFormik.errors.emailType}
            placeholder="Select Email Type"
          />
        </IonCol>
       <IonCol className="col-12 md:col-6">
       <FNInput
            type="text"
            name="email"
            label="Email"
            value={contactInfoFormik.values.email}
            onChange={contactInfoFormik.handleChange}
            onBlur={contactInfoFormik.handleBlur}
            invalid={
              contactInfoFormik.touched.email &&
              !!contactInfoFormik.errors.email
            }
            helpText={
              contactInfoFormik.touched.email &&
              contactInfoFormik.errors.email
            }
            placeholder={t("personalInformation.placeHolder.email")}
          />
       </IonCol>
      </IonRow>
      <IonRow className="mt-1 cursor-pointer">
          <IonCol className="col-12 md:col-6 add-input-txt">
          <i
                className="pi pi-plus-circle cursor-pointer pr-1 font-bold"
              ></i>
         <span>Add Another</span> 
          </IonCol>
          </IonRow>
       </FNCard>
        <div className="mt-5 col-12 btn-b">
          <div className="flex justify-content-end">
            <FNButton
              label="Cancel"
              type="button"
              className="w-full md:w-auto mr-3"
            />
            <FNButton
              label="Save"
              type="submit"
              className="w-full md:w-auto"
              disabled={!contactInfoFormik.isValid}
            />
          </div>
        </div>
      </form>
  );
};

export default ContactInformation;
