import React from "react";
import { Card } from "primereact/card";

export interface FNCardProps {
  children?: React.ReactNode;
  footer?: React.ReactNode | (() => React.ReactNode);
  header?: React.ReactNode | (() => React.ReactNode);
  pt?: object; // Replace with the actual type if available
  ptOptions?: object; // Replace with the actual type if available
  subTitle?: React.ReactNode | (() => React.ReactNode);
  title?: React.ReactNode | (() => React.ReactNode);
  unstyled?: boolean;
}

const FNCard: React.FC<FNCardProps> = ({
  children,
  footer,
  header,
  pt,
  ptOptions,
  subTitle,
  title,
  unstyled,
}) => {
  return (
    <Card
      footer={footer}
      header={header}
      pt={pt}
      ptOptions={ptOptions}
      subTitle={subTitle}
      title={title}
      unstyled={unstyled}
    >
      {children}
    </Card>
  );
};

export default FNCard;
