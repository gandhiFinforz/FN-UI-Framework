import React, { FC } from "react";
import { TabView, TabPanel, TabViewProps } from "primereact/tabview";
import { useTranslation } from "react-i18next";

export interface FNTab {
  header: string;
  content: React.ReactNode;
  icon?: string;
  disabled?: boolean;
  headerTemplate?: (options: any) => React.ReactNode;
}

export interface FNTabsProps extends TabViewProps {
  className?: string;
  tabClassName?: string;
  tabs: FNTab[];
  size?: "sm" | "md" | "lg";
  unstyled?: boolean;
  iconPosition?: "right" | "left"; // Specify iconPosition type
  disabled?: boolean;
  scrollable?: boolean;
  closable?: boolean;
}

const FNTabs: FC<FNTabsProps> = ({
  className = "",
  tabClassName = "",
  tabs,
  size,
  unstyled = false,
  iconPosition = "left", // Default to 'left' if not specified
  disabled = false,
  scrollable = true,
  closable = false,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <TabView
      scrollable={scrollable}
      className={`${className} p-tabview-${size}`}
      {...props}
    >
      {tabs.map((tab, index) => (
        <TabPanel
          key={index}
          header={t(tab.header)}
          {...(iconPosition === "right" && tab.icon
            ? { rightIcon: tab.icon }
            : {})}
          {...(iconPosition === "left" && tab.icon
            ? { leftIcon: tab.icon }
            : {})}
          disabled={tab.disabled}
          closable={closable}
          headerTemplate={tab.headerTemplate}
        >
          {tab.content}
        </TabPanel>
      ))}
    </TabView>
  );
};

export default FNTabs;
