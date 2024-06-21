import React, { FC } from "react";
import { Accordion, AccordionProps, AccordionTab } from "primereact/accordion";
import "primereact/resources/themes/saga-blue/theme.css"; // import theme
import "primereact/resources/primereact.min.css"; // import styles
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useTranslation } from "react-i18next";
import { IconType } from "primereact/utils";

export interface TabData {
  header: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface FNAccordionProps extends Omit<AccordionProps, "icon"> {
  tabs: TabData[];
  tabIndex?: number | undefined;
  activeIndex?: number | number[] | null | undefined;
  multiple?: boolean | undefined;
  expandIcon?: IconType<AccordionProps> | undefined;
  collapseIcon?: IconType<AccordionProps> | undefined;
  style?: React.CSSProperties | undefined;
  className?: string;
}

const FNAccordion: FC<FNAccordionProps> = ({
  tabs,
  tabIndex,
  activeIndex,
  multiple = true,
  expandIcon,
  collapseIcon,
  style,
  className,
  ...restProps
}) => {
  const { t } = useTranslation();

  return (
    <div className={`p-accordion ${className}`} style={style}>
      <Accordion
        activeIndex={activeIndex}
        multiple={multiple}
        expandIcon={expandIcon}
        collapseIcon={collapseIcon}
        {...restProps}
      >
        {tabs.map((tab, index) => (
          <AccordionTab
            key={index}
            header={t(tab.header)}
            disabled={tab.disabled}
          >
            {tab.content}
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};

export default FNAccordion;
