import React, { FC } from "react";
import {
  Checkbox,
  CheckboxChangeEvent,
  CheckboxProps,
} from "primereact/checkbox";
import "primereact/resources/themes/saga-blue/theme.css"; // import theme
import "primereact/resources/primereact.min.css"; // import styles
import "primeicons/primeicons.css";
import { useTranslation } from "react-i18next";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";

export interface PrimeCheckboxProps extends Omit<CheckboxProps, "icon"> {
  label: string;
  tooltip?: any;
  tooltipOptions?: TooltipOptions;
  disabled?: boolean;
  invalid?: boolean;
  checked: boolean;
  name?: string;
  value?: any;
  required?: boolean;
  readOnly?: boolean;
  icon?: string | JSX.Element;
  inputId?: string;
  style?: React.CSSProperties;
  className?: string;
  styleForLabel?: React.CSSProperties;
  onChange?: (event: CheckboxChangeEvent) => void;
}

const FNCheckbox: FC<PrimeCheckboxProps> = ({
  label,
  tooltip,
  tooltipOptions,
  inputId,
  name,
  value,
  checked,
  required,
  readOnly,
  disabled,
  invalid,
  styleForLabel,
  onChange,
  ...restProps
}) => {
  const { t } = useTranslation();
  const handleChange = (e: CheckboxChangeEvent) => {
    if (onChange) {
      onChange({
        originalEvent: e.originalEvent,
        checked: e.checked,
        stopPropagation: e.stopPropagation,
        preventDefault: e.preventDefault,
        target: e.target,
        value: undefined,
      });
    }
  };
  return (
    <div
      className={`p-field-checkbox ${restProps.className || ""}`}
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
        onChange={handleChange}
        tooltip={t(tooltip)}
        tooltipOptions={tooltipOptions}
        {...restProps}
      />
      <label htmlFor={inputId} style={styleForLabel}>
        {t(label)}
      </label>
    </div>
  );
};

export default FNCheckbox;
