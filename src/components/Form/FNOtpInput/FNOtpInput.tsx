import React, { FC } from "react";
import { InputOtp, InputOtpProps } from "primereact/inputotp";
import { useTranslation } from "react-i18next";

export interface FNOtpInputProps extends InputOtpProps {
  value: string | number | null;
  label?: string;
  invalid?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  variant?: "outlined" | "filled";
  length?: number;
  mask?: boolean;
  integerOnly?: boolean;
  helpText?: string | any;
}

const FNOtpInput: FC<FNOtpInputProps> = ({
  value,
  label,
  invalid,
  disabled,
  readonly,
  variant = "outlined",
  length = 6,
  mask,
  integerOnly = true,
  helpText,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={label ? "flex flex-column gap-1 " : ""}>
      {label && <label htmlFor={props.id}>{t(label)}</label>}
      <InputOtp
        id={props.id}
        value={value}
        disabled={disabled}
        readOnly={readonly}
        length={length}
        mask={mask}
        integerOnly={integerOnly}
        className={`p-inputtext ${variant === "outlined" ? "p-inputtext-outlined" : ""}`}
        variant={variant}
        {...props}
      />
      {helpText && <small className="p-error">{t(helpText)}</small>}
    </div>
  );
};

export default FNOtpInput;
