import React, { FC } from 'react';
import { ButtonProps, Button as PrimeButton } from 'primereact/button';
import { ButtonPassThroughOptions } from 'primereact/button';
import { PassThroughOptions } from 'primereact/passthrough';
import { TooltipOptions } from 'primereact/tooltip/tooltipoptions';
import 'primereact/resources/themes/saga-blue/theme.css'; // import theme
import 'primereact/resources/primereact.min.css';          // import styles
import 'primeicons/primeicons.css';
import { useTranslation } from 'react-i18next';

export interface PrimeButtonProps extends Omit<ButtonProps, 'icon'> {
    badge?: string;
    badgeClassName?: string;
    icon?: string | JSX.Element;
    iconPos?: 'left' | 'top' | 'bottom' | 'right';
    link?: boolean;
    loading?: boolean;
    loadingIcon?: string | JSX.Element;
    outlined?: boolean;
    plain?: boolean;
    pt?: ButtonPassThroughOptions;
    ptOptions?: PassThroughOptions;
    raised?: boolean;
    rounded?: boolean;
    severity?: 'success' | 'help' | 'warning' | 'secondary' | 'info' | 'danger';
    size?: 'small' | 'large';
    text?: boolean;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    unstyled?: boolean;
    visible?: boolean;
    label:string;
}

const FNButton: FC<PrimeButtonProps> = ({
    badge,
    badgeClassName,
    icon,
    iconPos = 'left',
    label,
    link = false,
    loading = false,
    loadingIcon,
    outlined = false,
    plain = false,
    pt,
    ptOptions,
    raised = false,
    rounded = false,
    severity,
    size,
    text = false,
    tooltip,
    tooltipOptions,
    unstyled = false,
    visible = true,
    ...restProps
}) => {
    if (!visible) {
        return null;
    }
    const { t } = useTranslation();
    return (
        <PrimeButton
            className={`${badge ? 'p-button-badge' : ''} ${badgeClassName || ''}`}
            label={t(label)}
            icon={icon}
            iconPos={iconPos}
            loading={loading}
            loadingIcon={loadingIcon}
            outlined={outlined}
            plain={plain}
            pt={pt}
            ptOptions={ptOptions}
            raised={raised}
            rounded={rounded}
            severity={severity}
            size={size}
            text={text}
            tooltip={t(tooltip)}
            tooltipOptions={tooltipOptions}
            disabled={restProps.disabled}
            onClick={restProps.onClick}
            {...restProps}
        >
            {badge && <span className="p-badge">{badge}</span>}
        </PrimeButton>
    );
};

export default FNButton;
