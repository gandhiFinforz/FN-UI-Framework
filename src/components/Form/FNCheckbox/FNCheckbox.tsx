import React, { FC } from "react";
import { Checkbox, CheckboxProps } from "primereact/checkbox";

import "primereact/resources/primereact.min.css"; // import styles
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useTranslation } from "react-i18next";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";

export interface FNCheckboxProps extends Omit<CheckboxProps, "icon"> {
  label: string;
  tooltip?: any;
  tooltipOptions?: TooltipOptions;
  disabled?: boolean;
  invalid?: boolean;
  checked: boolean;
  name: string;
  value?: any;
  required?: boolean;
  readOnly?: boolean;
  icon?: string | JSX.Element;
  inputId?: string;
  style?: React.CSSProperties;
  className?: string;
  labelClassName?: string;
  helpText?: string | any;
}

const FNCheckbox: FC<FNCheckboxProps> = ({
  label,
  tooltip,
  tooltipOptions,
  inputId,
  name,
  value,
  checked = false,
  required = false,
  readOnly = false,
  disabled = false,
  invalid = false,
  helpText,
  ...restProps
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`p-field-checkbox ${restProps.className}`}
      style={restProps.style}
    >
      <Checkbox
        inputId={inputId}
        name={name}
        value={value}
        checked={checked}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        invalid={invalid}
        tooltip={t(tooltip)}
        tooltipOptions={tooltipOptions}
        {...restProps}
      />
      <label htmlFor={inputId} className={`${restProps.labelClassName} ml-2`}>
        {t(label)}
      </label>

      <div>
        {helpText ? <small className="text-red-400">{t(helpText)}</small> : ""}
      </div>
    </div>
  );
};

export default FNCheckbox;
