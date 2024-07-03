import React, { FC } from "react";
import { Editor, EditorProps } from "primereact/editor";
import { useTranslation } from "react-i18next";

export interface FNTextEditorProps extends EditorProps {
  value: string;
  readOnly?: boolean;
  height?: string;
  className?: string;
  label?: string;
  helpText?: string;
}

const FNTextEditor: FC<FNTextEditorProps> = ({
  value= "",
  readOnly,
  height = "320px",
  className = "",
  label,
  helpText,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-column gap-2 ${className}`}>
      {label ? <label className="mt-2">{t(label)}</label> : ""}
      <Editor value={value} style={{ height }} readOnly={readOnly} {...props} />
      {helpText ? <small className="text-red-400">{t(helpText)}</small> : ""}
    </div>
  );
};

export default FNTextEditor;
