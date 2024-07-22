import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { addToast } from "../../store/toastSlice";
import FNAutoComplete from "../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import FNInput from "../../components/UIComponents/Form/FNInput/FNInput";
import FNButton from "../../components/UIComponents/Form/FNButton/FNButton";
import { IonCol, IonRow } from "@ionic/react";

interface BankFormValues {
  bankName: string;
  accountNumber: string;
  accountName: string;
  accountType: string;
  ifsc: string;
  branchName: string;
}
interface BankProps {
  onNext: () => void; // Callback function to handle next step
}
const bank = [
  { label: "SBI", value: "SBI" },
  { label: "HDFC", value: "HDFC" },
];

const accountType = [
  { label: "Savings", value: "Savings" },
  { label: "Current", value: "Current" },
];

const BankInformation: React.FC<BankProps> = ({ onNext }) => {
  const dispatch: AppDispatch = useDispatch();
  const bankFormik = useFormik<BankFormValues>({
    initialValues: {
      bankName: "",
      accountNumber: "",
      accountName: "",
      accountType: "",
      ifsc: "",
      branchName: ""
    },
    validationSchema: Yup.object({
      bankName: Yup.string().required("Bank Name is required"),
      accountNumber: Yup.string().required("Account Number is required"),
      accountName: Yup.string().required("Account Name is required"),
      accountType: Yup.string().required("Account Type is required"),
      ifsc: Yup.string().required("IFSC is required"),
      branchName: Yup.string().required("Branch Name is required"),
    }),
    onSubmit: (values) => {
      dispatch(
        addToast({
          id: new Date().getTime(),
          message: "Bank Details Added Successfully!",
          severity: "success",
        })
      );
      onNext();
    },
  });
  return (
    <form onSubmit={bankFormik.handleSubmit}>
      <IonRow>
        <IonCol className="col-12 md:col-6">
          <FNAutoComplete
            label="Select Bank"
            suggestions={bank}
            value={bankFormik.values.bankName}
            dropdown
            onSelect={(e) =>
              bankFormik.setFieldValue("bankName", e.value.label)
            }
            onBlur={() => bankFormik.setFieldTouched("bankName", true)}
            field="label"
            invalid={
              bankFormik.touched.bankName && !!bankFormik.errors.bankName
            }
            helpText={bankFormik.touched.bankName && bankFormik.errors.bankName}
            placeholder="Select Your Bank"
          />
        </IonCol>
        <IonCol className="col-12 md:col-6">
          <FNInput
            type="text"
            name="accountNumber"
            label="Account Number"
            placeholder="Enter Account Number"
            value={bankFormik.values.accountNumber}
            onChange={bankFormik.handleChange}
            onBlur={bankFormik.handleBlur}
            invalid={
              bankFormik.touched.accountNumber &&
              !!bankFormik.errors.accountNumber
            }
            helpText={
              bankFormik.touched.accountNumber &&
              bankFormik.errors.accountNumber
            }
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="col-12 md:col-6">
          <FNInput
            type="text"
            name="accountName"
            label="Account Name"
            placeholder="Enter Account Name"
            value={bankFormik.values.accountName}
            onChange={bankFormik.handleChange}
            onBlur={bankFormik.handleBlur}
            invalid={
              bankFormik.touched.accountName && !!bankFormik.errors.accountName
            }
            helpText={
              bankFormik.touched.accountName && bankFormik.errors.accountName
            }
          />
        </IonCol>
        <IonCol className="col-12 md:col-6">
          <FNAutoComplete
            suggestions={accountType}
            label="Account Type"
            value={bankFormik.values.accountType}
            dropdown
            onSelect={(e: { value: { label: any } }) =>
              bankFormik.setFieldValue("accountType", e.value.label)
            }
            onBlur={() => bankFormik.setFieldTouched("accountType", true)}
            field="label"
            invalid={
              bankFormik.touched.accountType && !!bankFormik.errors.accountType
            }
            helpText={
              bankFormik.touched.accountType && bankFormik.errors.accountType
            }
            placeholder="Select Account Type"
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="col-12 md:col-6">
          <FNInput
            type="text"
            name="ifsc"
            label="IFSC"
            placeholder="Enter IFSC"
            value={bankFormik.values.ifsc}
            onChange={bankFormik.handleChange}
            onBlur={bankFormik.handleBlur}
            invalid={
              bankFormik.touched.ifsc && !!bankFormik.errors.ifsc
            }
            helpText={
              bankFormik.touched.ifsc && bankFormik.errors.ifsc
            }
          />
        </IonCol>
        <IonCol className="col-12 md:col-6">
        <FNInput
            type="text"
            name="branchName"
            label="Branch Name"
            placeholder="Enter Branch Name"
            value={bankFormik.values.branchName}
            onChange={bankFormik.handleChange}
            onBlur={bankFormik.handleBlur}
            invalid={
              bankFormik.touched.branchName && !!bankFormik.errors.branchName
            }
            helpText={
              bankFormik.touched.accountName && bankFormik.errors.branchName
            }
          />
        </IonCol>
      </IonRow>
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
              disabled={!bankFormik.isValid}
            />
          </div>
        </div>
      
    </form>
  );
};

export default BankInformation;
