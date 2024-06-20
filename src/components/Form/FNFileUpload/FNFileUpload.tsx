import {
  FileUpload,
  FileUploadProps,
} from "primereact/fileupload";
import { InputTextareaPassThroughOptions } from "primereact/inputtextarea";
import { PassThroughOptions } from "primereact/passthrough";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export interface FNFileUploadProps extends FileUploadProps {
  className?: string;
  disabled?: boolean;
  unstyled?: boolean;
  value?: string;
  variant?: "filled" | "outlined";
  name: string;
  url?: string;
  multiple?: boolean;
  mode: "basic" | "advanced";
  accept?: string;
  maxFileSize?: number;
  emptyTemplate?: string;
  label?: string;
  helpText?: string;
  auto?: boolean;
  uploadLabel?: string;
  progressBarTemplate?: any;
  previewWidth?: number;
  pt?: InputTextareaPassThroughOptions;
  ptOptions?: PassThroughOptions;
  size?: "sm" | "md" | "lg";
}

const FNFileUpload: FC<FNFileUploadProps> = ({
  className = "",
  disabled,
  name,
  url,
  multiple,
  accept,
  maxFileSize,
  label,
  helpText,
  uploadLabel,
  unstyled,
  progressBarTemplate,
  previewWidth,
  mode,
  pt,
  ptOptions,
  size,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <div className="card">
      {label ? <label className="mt-2">{t(label)}</label> : ""}
      <FileUpload
        id="p-fileupload"
        className={`mt-2 ${className}`}
        name={name}
        url={url}
        multiple={multiple}
        accept={accept}
        maxFileSize={maxFileSize}
        disabled={disabled}
        uploadLabel={uploadLabel}
        unstyled={unstyled}
        progressBarTemplate={progressBarTemplate}
        previewWidth={previewWidth}
        pt={pt}
        ptOptions={ptOptions}
        mode={mode}
        emptyTemplate={<p>Drag and drop files to here to upload.</p>}
        {...props}
      />
      {helpText ? <small className="text-red-400">{t(helpText)}</small> : ""}
    </div>
  );
};

export default FNFileUpload;
