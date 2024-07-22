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
import FNButton from "../../components/UIComponents/Form/FNButton/FNButton";
import { IonRow, IonCol } from "@ionic/react";
interface AddressFormValues {
  street1: string;
  street2: string;
  city: string;
  country: string;
  state: string;
  pinCode: string;
}

interface AddressProps {
  onNext: () => void; // Callback function to handle next step
}

const Country = [
  { label: "India", value: "India" },
  { label: "USA", value: "USA" },
  { label: "Singapore", value: "Singapore" },
  { label: "Canada", value: "Canada" },
];

const Address: React.FC<AddressProps> = ({ onNext }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const addressFormik = useFormik<AddressFormValues>({
    initialValues: {
      street1: "",
      street2: "",
      city: "",
      state: "",
      country: "",
      pinCode: "",
    },
    validationSchema: Yup.object({
      street1: Yup.string().required(t("address.validation.street1Required")),
      street2: Yup.string().required(t("address.validation.street2Required")),
      city: Yup.string().required(t("address.validation.cityRequired")),
      state: Yup.string().required(t("address.validation.stateRequired")),
      country: Yup.string().required(t("address.validation.countryRequired")),
      pinCode: Yup.string().required(t("address.validation.pinCodeRequired")),
    }),
    onSubmit: (values) => {
      dispatch(
        addToast({
          id: new Date().getTime(),
          message: t("address.msg.success"),
          severity: "success",
        })
      );
      onNext();
    },
  });

  const alphabetRegexPattern = /^[a-zA-Z\s]*$/;

  return (
    <form onSubmit={addressFormik.handleSubmit}>
      <IonRow>
        <IonCol className="col-12 md:col-6">
          <FNInput
            type="text"
            name="street1"
            label="Street 1"
            
            value={addressFormik.values.street1}
            onChange={addressFormik.handleChange}
            onBlur={addressFormik.handleBlur}
            invalid={
              addressFormik.touched.street1 && !!addressFormik.errors.street1
            }
            helpText={
              addressFormik.touched.street1 && addressFormik.errors.street1
            }
            placeholder={t("address.placeHolder.street1")}
          />
        </IonCol>
        <IonCol className="col-12 md:col-6">
          <FNInput
            type="text"
            name="street2"
            label="Street 2"
            
            value={addressFormik.values.street2}
            onChange={addressFormik.handleChange}
            onBlur={addressFormik.handleBlur}
            invalid={
              addressFormik.touched.street2 && !!addressFormik.errors.street2
            }
            helpText={
              addressFormik.touched.street2 && addressFormik.errors.street2
            }
            placeholder={t("address.placeHolder.street2")}
          />
        </IonCol>
      </IonRow>
      <IonRow>
      <IonCol className="col-12 md:col-6">
          <FNInput
            type="text"
            name="city"
            label="City"
            value={addressFormik.values.city}
            onChange={addressFormik.handleChange}
            onBlur={addressFormik.handleBlur}
            invalid={addressFormik.touched.city && !!addressFormik.errors.city}
            helpText={addressFormik.touched.city && addressFormik.errors.city}
            placeholder={t("address.placeHolder.city")}
          />
        </IonCol>
        <IonCol className="col-12 md:col-6">
          <FNInput
            type="text"
            name="state"
            label="State"
            
            value={addressFormik.values.state}
            onChange={addressFormik.handleChange}
            onBlur={addressFormik.handleBlur}
            invalid={
              addressFormik.touched.state && !!addressFormik.errors.state
            }
            helpText={addressFormik.touched.state && addressFormik.errors.state}
            placeholder={t("address.placeHolder.state")}
          />
        </IonCol>
        
      </IonRow>
      <IonRow>
        
        <IonCol className="col-12 md:col-6">
          <FNAutoComplete
            label="Country"
            suggestions={Country}
            value={addressFormik.values.country}
            dropdown
            onSelect={(e: { value: { label: any } }) =>
              addressFormik.setFieldValue("country", e.value.label)
            }
            onBlur={() => addressFormik.setFieldTouched("country", true)}
            field="label"
            invalid={
              addressFormik.touched.country && !!addressFormik.errors.country
            }
            helpText={
              addressFormik.touched.country && addressFormik.errors.country
            }
            placeholder={t("address.placeHolder.country")}
          />
        </IonCol>
        <IonCol className="col-12 md:col-6">
          <FNInput
            type="number"
            name="pinCode"
            label="Pin Code"
            
            value={addressFormik.values.pinCode}
            onChange={addressFormik.handleChange}
            onBlur={addressFormik.handleBlur}
            invalid={
              addressFormik.touched.pinCode && !!addressFormik.errors.pinCode
            }
            helpText={
              addressFormik.touched.pinCode && addressFormik.errors.pinCode
            }
            placeholder={t("address.placeHolder.pinCode")}
          />
        </IonCol>
      </IonRow>
      <div className="mt-5 col-12 btn-b">
        <div className="flex justify-content-end">
          <FNButton
            label="Cancel"
            type="button"
            className="w-full md:w-auto mr-3"
            onClick={() => navigate("/")} // or your desired route
          />
          <FNButton
            label="Save"
            type="submit"
            className="w-full md:w-auto"
            disabled={!addressFormik.isValid}
          />
        </div>
      </div>
    </form>
  );
};

export default Address;
