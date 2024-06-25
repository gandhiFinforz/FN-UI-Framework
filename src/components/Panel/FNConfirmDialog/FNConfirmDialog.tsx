import React, { FC } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { ConfirmDialog, ConfirmDialogProps } from "primereact/confirmdialog";

export interface FNConfirmDialogProps
  extends Omit<ConfirmDialogProps, "visible" | "onHide"> {
  header: string;
  message: string | React.ReactNode;
  visible?: boolean;
  className?: string;
  acceptLabel?: string;
  rejectLabel?: string;
  position?: any;
  width?: string;
  height?: string;
}

const FNConfirmDialog: FC<FNConfirmDialogProps> = ({
  header,
  visible,
  className,
  message,
  acceptLabel,
  rejectLabel,
  position = "center",
  width,
  height,
  ...restProps
}) => {
  return (
    <div className={`p-dialog ${className}`}>
      <ConfirmDialog
        header={header}
        visible={visible}
        message={message}
        acceptLabel={acceptLabel}
        rejectLabel={rejectLabel}
        position={position}
        style={{ width: width, height: height }}
        {...restProps}
      ></ConfirmDialog>
    </div>
  );
};

export default FNConfirmDialog;
