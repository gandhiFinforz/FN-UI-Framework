import  { FC } from "react";
import { ConfirmDialog, ConfirmDialogProps } from "primereact/confirmdialog";


export interface FNConfirmDialogProps extends ConfirmDialogProps {
    message?: string;
    header?: string;
    icon?: string;
    accept?: any;
    reject?: any;
    defaultFocus?:string;
    acceptClassName?:string;
}

const FNConfirmDialog: FC<FNConfirmDialogProps> = ({
    message,
    header,
    icon,
    accept,
    reject ,
    acceptClassName,
    defaultFocus= 'accept',
  ...props
}) => {

  return (
    <ConfirmDialog
      message={message}
      header={header}
      icon={icon}
      acceptClassName={acceptClassName}
      onHide={() => {}}
      {...props}
    />
  );
};

export default FNConfirmDialog;
