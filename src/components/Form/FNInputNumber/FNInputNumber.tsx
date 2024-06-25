import React, { CSSProperties, FC, Ref } from 'react';
import { InputNumber, InputNumberPassThroughOptions, InputNumberProps, RoundingMode } from 'primereact/inputnumber';
import { KeyFilterType } from 'primereact/keyfilter';
import { PassThroughOptions } from 'primereact/passthrough';
import { TooltipOptions } from 'primereact/tooltip/tooltipoptions';
import { useTranslation } from 'react-i18next';
import { IconType } from 'primereact/utils';
export interface FNInputNumberProps extends InputNumberProps {
    className?: string,
    type?:"ceil" | "floor" | "expand" | "trunc" | "halfCeil" | "halfFloor" | "halfExpand" | "halfTrunc" | "halfEven";
    label?: string;
    disabled?: boolean;
    invalid?: boolean;
    pt?: InputNumberPassThroughOptions;
    ptOptions?: PassThroughOptions;
    size?: number | undefined;
    helpText?: string | any,
    tooltip?: string | any;
    tooltipOptions?: TooltipOptions;
    unstyled?: boolean;
    value?: null | number;
    variant?: 'filled' | 'outlined';
    name:string;
    allowEmpty?: boolean;
    ariaLabelledBy?: string;
    autoFocus?: boolean;
    buttonLayout?: "horizontal" | "vertical" | "stacked";
    currency?: string;
    currencyDisplay?: string;
    decrementButtonClassName?: string;
    decrementButtonIcon?: IconType<InputNumberProps>;
    format?: boolean;
    incrementButtonClassName?: string;
    incrementButtonIcon?: IconType<InputNumberProps>;
    inputClassName?: string;
    inputId?: string;
    inputRef?: Ref<HTMLInputElement>;
    inputStyle?: CSSProperties;
    locale?: string;
    localeMatcher?: string;
    max?: number;
    maxFractionDigits?: number;
    maxLength?: number;
    min?: number;
    minFractionDigits?: number;
    mode?: "decimal" | "currency";
    pattern?: string;
    placeholder?: string;
    prefix?: string;
    readOnly?: boolean;
    required?: boolean;
    roundingMode?: RoundingMode;
    showButtons?: boolean;
    step?: number;
    suffix?: string;
    tabIndex?: number;
    useGrouping?: boolean;

}

const FNInputNumber: FC<FNInputNumberProps> = ({
    disabled = false,
    invalid = false,
    label,
    type,
    pt,
    ptOptions,
    size,
    tooltip,
    tooltipOptions,
    unstyled = false,
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
            <InputNumber 
                type={type}
                className={ `${className} p-inputtext-${size}`}
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

export default FNInputNumber;
