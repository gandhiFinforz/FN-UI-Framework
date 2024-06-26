import React, { CSSProperties, FC, Ref, useState } from 'react';
import { InputSwitch, InputSwitchChangeEvent, InputSwitchPassThroughOptions, InputSwitchProps } from 'primereact/inputswitch';
import { PassThroughOptions } from 'primereact/passthrough';
import { TooltipOptions } from 'primereact/tooltip/tooltipoptions';
import { useTranslation } from 'react-i18next';

export interface FNInputSwitchProps extends InputSwitchProps {
  className?: string;
  label?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  falseValue?: any;
  id?: string;
  inputId?: string;
  inputRef?: Ref<HTMLInputElement>;
  invalid?: boolean;
  name?: string;
  pt?: InputSwitchPassThroughOptions;
  ptOptions?: PassThroughOptions;
  style?: CSSProperties;
  tooltip?: string | undefined;
  tooltipOptions?: TooltipOptions;
  tabIndex?: number;
  trueValue?: any;
  unstyled?: boolean;
  helpText?: string | false | undefined;
  onChange: (e: InputSwitchChangeEvent) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FNInputSwitch: FC<FNInputSwitchProps> = ({
  disabled = false,
  invalid = false,
  pt,
  label,
  value,
  ptOptions,
  tooltip,
  tooltipOptions,
  unstyled = false,
  className = '',
  helpText,
  onChange,
  onBlur,
  checked = false, // Ensure a default value
  ...props
}) => {
  const { t } = useTranslation();
  const [selectedValue, setSelectedValue] = useState(value || false);
  const handleChange = (e: InputSwitchChangeEvent) => {
    setSelectedValue(e.value);
    onChange(e); // Pass the event to the Formik handler
  };
  return (
    <div className={label ? 'flex flex-column gap-1 ' : ''}>
      {label && <label className='mt-2'>{t(label)}</label>}
      <InputSwitch
        className={`${className}`}
        pt={pt}
        ptOptions={ptOptions}
        tooltip={tooltip ? t(tooltip) : undefined}
        tooltipOptions={tooltipOptions}
        checked={checked} // Ensure checked is correctly passed
        invalid={invalid}
        disabled={disabled}
        unstyled={unstyled}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        {...props}
      />
      {helpText && <small className='text-red-400'>{t(helpText)}</small>}
    </div>
  );
};

export default FNInputSwitch;
