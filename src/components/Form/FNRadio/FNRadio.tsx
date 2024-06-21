import React, { FC, useState, Ref } from "react";
import { FieldProps } from "formik";
import {
  RadioButton,
  RadioButtonProps,
  RadioButtonPassThroughOptions,
} from "primereact/radiobutton";
import { TooltipOptions } from "primereact/tooltip/tooltipoptions";
import { PassThroughOptions } from "primereact/passthrough";
import { useTranslation } from "react-i18next";

interface OptionRadioProps extends RadioButtonProps {
  value: string;
  label: string;
  disabled?: boolean;
  autoFocus?: boolean;
  checked?: boolean;
  children?: string;
  inputId?: string;
  inputRef?: Ref<HTMLInputElement>;
  invalid?: boolean;
  pt?: RadioButtonPassThroughOptions;
  ptOptions?: PassThroughOptions;
  readonly?: boolean;
  required?: boolean;
  tooltip?: string | any;
  tooltipOptions?: TooltipOptions;
  unstyled?: boolean;
  variant?: "outlined" | "filled";
}

export interface RadioFieldProps {
  className?: string;
  name: string;
  options: OptionRadioProps[];
  variant?: "outlined" | "filled";
  inputRef?: Ref<HTMLInputElement>;
  tooltip?: string;
  tooltipOptions?: TooltipOptions;
  autoFocus?: boolean,
  checked?: boolean,
  inputId?: string,
  invalid?: boolean,
  readonly?: boolean,
  required?: boolean,
  unstyled?: boolean,
}

const RadioField: FC<RadioFieldProps & FieldProps> = ({
  field,
  form,
  name,
  options,
  className = "",
  variant,
  autoFocus = true,
  checked = false,
  inputId = "",
  invalid = false,
  readonly = false,
  required = true,
  tooltip = "",
  unstyled = false,
  ...props
}) => {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState(field.value || "");

  const handleChange = (value: string) => {
    setSelectedValue(value);
    form.setFieldValue(name, value);
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {options.map((d: OptionRadioProps) => (
        <div
          key={d.value}
          className={className ? "flex align-items-center" : ""}
        >
          <RadioButton
            className={
              variant === "outlined"
                ? "p-radiobutton-outlined"
                : "p-radiobutton-filled"
            }
            disabled={d.disabled}
            invalid={d.invalid}
            inputId={d.inputId || d.value} // Ensure inputId is set correctly
            value={d.value}
            readonly={d.readonly}
            required={d.required}
            tooltip={t(d.tooltip)}
            unstyled={d.unstyled}
            name={name}
            onChange={() => handleChange(d.value)}
            checked={selectedValue === d.value}
            inputRef={d.inputRef}
            pt={d.pt}
            ptOptions={d.ptOptions}
          />
          {d.label && (
            <label htmlFor={d.inputId || d.value} className="ml-2">
              {t(d.label)}
            </label>
          )}
        </div>
      ))}
    </div>
  );
};

export default RadioField;
