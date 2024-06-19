import React, { FC } from 'react';
import { InputTextarea, InputTextareaPassThroughOptions, InputTextareaProps } from 'primereact/inputtextarea';
import { PassThroughOptions } from 'primereact/passthrough';
import { TooltipOptions } from 'primereact/tooltip/tooltipoptions';
import { useTranslation } from 'react-i18next';


export interface TextAreaFieldProps extends InputTextareaProps {
    className?: string;
    label?: string;
    disabled?: boolean;
    invalid?: boolean;
    pt?: InputTextareaPassThroughOptions;
    ptOptions?: PassThroughOptions;
    size?: 'sm' | 'md' | 'lg';
    helpText?: string | any;
    tooltip?: string | any;
    tooltipOptions?: TooltipOptions;
    unstyled?: boolean;
    validateOnly?: boolean;
    value?: string;
    variant?: 'filled' | 'outlined';
    name: string;
}

const TextAreaField: FC<TextAreaFieldProps> = ({
    disabled = false,
    invalid = false,
    label,
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
            {label ? <label className='mt-2'>{t(label)}</label> : ''}
            <InputTextarea
                className={`${className} p-inputtext-${size}`}
                pt={pt}
                ptOptions={ptOptions}
                
                tooltip={t(tooltip)}
                tooltipOptions={tooltipOptions}
                value={value}
                variant={variant}
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

export default TextAreaField;
