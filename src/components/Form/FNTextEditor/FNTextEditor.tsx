import React, { FC } from "react";
import { Editor, EditorProps } from "primereact/editor";
import { useTranslation } from "react-i18next";

export interface FNTextEditorProps extends EditorProps {
  value: string;
  readOnly?: boolean;
  height?: string;
  className?: string;
  headerTemplate?: React.ReactNode;
  label?: string;
  helpText?: string;
}

const FNTextEditor: FC<FNTextEditorProps> = ({
  value,
  readOnly,
  height = "320px",
  className = "",
  headerTemplate,
  label,
  helpText,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={`card ${className}`}>
      {label ? <label className="mt-2">{t(label)}</label> : ""}
      <Editor
        value={t(value)}
        style={{ height }}
        readOnly={readOnly}
        headerTemplate={headerTemplate}
        {...props}
      />
      {helpText ? <small className="text-red-400">{t(helpText)}</small> : ""}
    </div>
  );
};

export default FNTextEditor;
