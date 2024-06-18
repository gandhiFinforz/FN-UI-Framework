import React, { FC } from 'react';
import { InputText, InputTextPassThroughOptions, InputTextProps } from 'primereact/inputtext';
import { KeyFilterType } from 'primereact/keyfilter';
import { PassThroughOptions } from 'primereact/passthrough';
import { TooltipOptions } from 'primereact/tooltip/tooltipoptions';
import { useTranslation } from 'react-i18next';
export interface InputFieldProps extends InputTextProps {
    className?: string,
    type:'text'
    | 'password'
    | 'email'
    | 'url'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'search'
    | 'tel'
    | 'color'
    | 'range'
    | 'hidden'
    | 'week';
    label?: string;
    disabled?: boolean;
    invalid?: boolean;
    keyfilter?: KeyFilterType;
    pt?: InputTextPassThroughOptions;
    ptOptions?: PassThroughOptions;
    size?: 'sm' | 'md' | 'lg';
    helpText?: string | any,
    tooltip?: string | any;
    tooltipOptions?: TooltipOptions;
    unstyled?: boolean;
    validateOnly?: boolean;
    value?: string;
    variant?: 'filled' | 'outlined';
    name:string;
}

const InputField: FC<InputFieldProps> = ({
    disabled = false,
    invalid = false,
    label,
    type,
    keyfilter,
    pt,
    ptOptions,
    size,
    tooltip,
    tooltipOptions,
    unstyled = false,
    validateOnly = false,
    value,
    variant = 'outlined',
    className = '',
    helpText,
    ...props
}) => {
    const { t } = useTranslation();
    return (
        <div className={label ? 'flex flex-column gap-1 ' : ''}>
            {label ? <label className='mt-2'>{t(label)}</label> :''}
            <InputText
                type={type}
                className={ `${className} p-inputtext-${size}`}
                keyfilter={keyfilter}
                pt={pt}
                ptOptions={ptOptions}
                size={size}
                tooltip={t(tooltip)}
                tooltipOptions={tooltipOptions}
                value={value}
                variant={variant}
                invalid={invalid}
                disabled={disabled}
                unstyled={unstyled}
                {...props}
            />
            {helpText ?
                <small className='text-red-400'>
                    {t(helpText)}
                </small>
                : ''}
        </div>
    );
};

export default InputField;
