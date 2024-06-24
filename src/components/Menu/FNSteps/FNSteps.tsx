import React, { FC, useState } from "react";
import {
  Steps as PrimeSteps,
  StepsProps as PrimeStepsProps,
  StepsSelectEvent,
} from "primereact/steps";
import { StepsPassThroughOptions } from "primereact/steps";
import { PassThroughOptions } from "primereact/passthrough";
import { useTranslation } from "react-i18next";

export interface FNOptionStepsProps {
  label: string;
  icon?: string;
  url?: string;
  expanded?: boolean;
  disabled?: boolean;
  visible? : boolean;
  target?: string;
  separator?: boolean;
}

export interface StepsProps extends PrimeStepsProps {
  className?: string;
  model: FNOptionStepsProps[];
  initialIndex: number;
  onSelect?: (event: StepsSelectEvent) => void;
  children?: string;
  pt?: StepsPassThroughOptions;
  ptOptions?: PassThroughOptions;
  readOnly?: boolean;
  unstyled?: boolean;
}

const FNStepsMenu: FC<StepsProps> = ({
  className = "",
  model,
  initialIndex,
  onSelect,
  readOnly,
  ...props
}) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const itemRenderer = (item: FNOptionStepsProps, itemIndex: number) => {
    const isActiveItem = activeIndex === itemIndex;
    const backgroundColor = isActiveItem
      ? "var(--primary-color)"
      : "var(--surface-b)";
    const textColor = isActiveItem
      ? "var(--surface-b)"
      : "var(--text-color-secondary)";

    return (
      <span
        className="inline-flex align-items-center justify-content-center align-items-center border-circle border-primary border-1 h-3rem w-3rem z-1 cursor-pointer"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          marginTop: "-25px",
        }}
        onClick={() => setActiveIndex(itemIndex)}
      >
        {item.icon ? <i className={`${item.icon} text-xl`} /> : itemIndex + 1}
      </span>
    );
  };

  const translatedModel = model.map((step, index) => ({
    ...step,
    label: t(step.label),
    template: () => itemRenderer(step, index),
  }));

  const handleSelect = (event: StepsSelectEvent) => {
    setActiveIndex(event.index);
    if (onSelect) {
      onSelect(event);
    }
  };

  return (
    <div data-testid="steps-menu" className={`card mt-4 ${className}`}>
      <PrimeSteps
        model={translatedModel}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        readOnly={readOnly}
        {...props}
      />
    </div>
  );
};

export default FNStepsMenu;
