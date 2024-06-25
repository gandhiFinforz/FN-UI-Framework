import React, { FC } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import {  ConfirmDialog, ConfirmDialogProps } from "primereact/confirmdialog";

export interface FNConfirmDialogProps extends Omit<ConfirmDialogProps, "visible" | "onHide"> {
  header: string;
  content: string | React.ReactNode;
  footerButtons?: {
    label: string;
    icon: string;
    onClick: () => void;
    className?: string;
  }[];
  visible: boolean;
  onHide: () => void;
  className?: string;
}

const FNConfirmDialog: FC<FNConfirmDialogProps> = ({
  header,
  content,
  footerButtons = [],
  visible,
  onHide,
  className,
  ...restProps
}) => {
 
  return (
    <div className={`p-dialog ${className}`}>
      <ConfirmDialog
        header={header}
        visible={visible}
        onHide={onHide}
        {...restProps}
      >
        {content}
      </ConfirmDialog>
    </div>
  );
};

export default FNConfirmDialog;
