import React, { FC } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from "react-i18next";

export interface FNPhoneInputProps extends PhoneInputProps { 
  name?: string; 
  value: string;
  label?: string;
  invalid?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  variant?: "outlined" | "filled";
  helpText?: string | any;
  placeholder?: string;
  inputProps?: {
    required?: boolean;
    id?: string;
  };
  showHelpText?: boolean;
}

const FNPhoneInput: FC<FNPhoneInputProps> = ({
  value,
  label,
  invalid,
  disabled,
  readonly,
  variant = "outlined",
  helpText,
  placeholder,
  inputProps,
  showHelpText = false,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={label ? "flex flex-column gap-1" : ""}>
      {label && <label htmlFor={inputProps?.id}>{t(label)}</label>}
      <PhoneInput
        country={"in"}
        value={value}
        disabled={disabled}
        inputProps={{
          readOnly: readonly,
          required: inputProps?.required,
          id: inputProps?.id,
        }}
        placeholder={placeholder}
        inputClass={`p-inputtext ${variant === "outlined" ? "p-inputtext-outlined" : ""}`}
        {...props}
      />
      {showHelpText && helpText && <small className="p-error">{t(helpText)}</small>}
    </div>
  );
};

export default FNPhoneInput;
