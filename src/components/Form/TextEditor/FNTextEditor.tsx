import React, { FC } from "react";
import { Editor, EditorProps } from "primereact/editor";
import { useTranslation } from "react-i18next";

export interface FNTextEditorProps extends EditorProps {
  value: string;
  readOnly?: boolean;
  height?: string;
  className?: string;
  headerTemplate?: React.ReactNode;
}

const FNTextEditor: FC<FNTextEditorProps> = ({
  value,
  readOnly,
  height = "320px",
  className = "",
  headerTemplate,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={`card ${className}`}>
      <Editor
        value={t(value)}
        style={{ height }}
        readOnly={readOnly}
        headerTemplate={headerTemplate}
        {...props}
      />
    </div>
  );
};

export default FNTextEditor;
