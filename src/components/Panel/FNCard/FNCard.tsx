import React from "react";
import { Card, CardProps } from "primereact/card";

export interface FNCardProps extends CardProps {
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
  ...props
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
      {...props}
    >
      {children}
    </Card>
  );
};

export default FNCard;
