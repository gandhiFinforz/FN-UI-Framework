import React from 'react';
import { useFormik } from "formik";
import FNAutoComplete from "../../../components/UIComponents/Form/FNAutoComplete/FNAutoComplete";
import FNButton from "../../../components/UIComponents/Form/FNButton/FNButton";
import FNInput from "../../../components/UIComponents/Form/FNInput/FNInput";
import "./bankInformation.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { addToast } from "../../../store/toastSlice";

interface BankFormValues {
  bankName: string;
  accountNumber: string;
  accountName: string;
  accountType: string;
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

const BankInformation: React.FC<BankProps> = ({onNext}) => {
  const dispatch: AppDispatch = useDispatch();
  const bankFormik = useFormik<BankFormValues>({
    initialValues: {
      bankName: "",
      accountNumber: "",
      accountName: "",
      accountType: "",
    },
    validationSchema: Yup.object({
      bankName: Yup.string().required("Bank Name is required"),
      accountNumber: Yup.string().required("Account Number is required"),
      accountName: Yup.string().required("Account Name is required"),
      accountType: Yup.string().required("Account Type is required"),
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
    <div className="flex justify-content-center h-90vh mt-2">
      <div className="col-12 sm:col-8 md:col-5 flex flex-column">
        <h3 className="text-center">Bank Account</h3>
        <form onSubmit={bankFormik.handleSubmit} className="flex flex-column flex-grow-1">
          <div className="mb-2">
            <FNAutoComplete
              label="Select Bank"
              suggestions={bank}
              value={bankFormik.values.bankName}
                    onSelect={(e) =>
                      bankFormik.setFieldValue("bankName", e.value.label)
                    }
                    onBlur={() =>
                      bankFormik.setFieldTouched("bankName", true)
                    }
                    field="label"
                    invalid={
                      bankFormik.touched.bankName &&
                      !!bankFormik.errors.bankName
                    }
                    helpText={
                      bankFormik.touched.bankName &&
                      bankFormik.errors.bankName
                    }
              placeholder="Select Your Bank"
            />
          </div>
          <div className="mb-2">
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
          </div>
          <div className="mb-2">
            <FNInput
              type="text"
              name="accountName"
              label="Account Name"
              placeholder="Enter Account Name"
              value={bankFormik.values.accountName}
              onChange={bankFormik.handleChange}
              onBlur={bankFormik.handleBlur}
              invalid={
                bankFormik.touched.accountName &&
                !!bankFormik.errors.accountName
              }
              helpText={
                bankFormik.touched.accountName &&
                bankFormik.errors.accountName
              }
            />
          </div>
          <div className="mb-2">
            <FNAutoComplete
              suggestions={accountType}
              label="Account Type"
              value={bankFormik.values.accountType}
                    onSelect={(e) =>
                      bankFormik.setFieldValue("accountType", e.value.label)
                    }
                    onBlur={() =>
                      bankFormik.setFieldTouched("accountType", true)
                    }
                    field="label"
                    invalid={
                      bankFormik.touched.accountType &&
                      !!bankFormik.errors.accountType
                    }
                    helpText={
                      bankFormik.touched.accountType &&
                      bankFormik.errors.accountType
                    }
              placeholder="Select Account Type"
            />
          </div>
          <div className="mt-auto">
            <FNButton label="Next" type="submit" className="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankInformation;
