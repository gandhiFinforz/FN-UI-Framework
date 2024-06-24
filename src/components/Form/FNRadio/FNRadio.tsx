import React, { FC, useState, Ref } from "react";
import {
  RadioButton,
  RadioButtonProps,
  RadioButtonChangeEvent,
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
  initialValue: string;
  value: string;
  onChange: (e: RadioButtonChangeEvent) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  helpText?: string | any;
  error?: string;
}

const RadioField: FC<RadioFieldProps> = ({
  name,
  options,
  className = "",
  initialValue,
  value,
  onChange,
  onBlur,
  helpText,
  error,
  ...props
}) => {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState(initialValue || "");

  const handleChange = (e: RadioButtonChangeEvent) => {
    setSelectedValue(e.value);
    onChange(e); // Pass the event to the Formik handler
  };

  return (
    <div data-testid="radio-field" className={`flex flex-wrap gap-3`}>
      {options.map((d: OptionRadioProps) => (
        <div key={d.value} className={"flex align-items-center"}>
          <RadioButton
            className={className}
            variant={d.variant}
            disabled={d.disabled}
            invalid={d.invalid}
            inputId={d.inputId || d.value} // Ensure inputId is set correctly
            value={d.value}
            readonly={d.readonly}
            required={d.required}
            tooltip={t(d.tooltip)}
            unstyled={d.unstyled}
            name={name}
            onChange={handleChange}
            onBlur={onBlur}
            checked={value === d.value}
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
      {helpText ? <div className="error text-red-400">{t(helpText)}</div> : null}
    </div>
  );
};

export default RadioField;
