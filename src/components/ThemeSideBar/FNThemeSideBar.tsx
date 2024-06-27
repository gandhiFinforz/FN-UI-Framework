import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import FNButton from "../UIComponents/Form/FNButton/FNButton";
import { Divider } from "primereact/divider";

// Define theme imports grouped by color scheme
const themeImports = {
  light: {
    "saga-blue": () =>
      import(`primereact/resources/themes/saga-blue/theme.css`),
    "saga-green": () =>
      import(`primereact/resources/themes/saga-green/theme.css`),
    "saga-orange": () =>
      import(`primereact/resources/themes/saga-orange/theme.css`),
    "saga-purple": () =>
      import(`primereact/resources/themes/saga-purple/theme.css`),
  },
  dim: {
    "vela-blue": () =>
      import(`primereact/resources/themes/vela-blue/theme.css`),
    "vela-green": () =>
      import(`primereact/resources/themes/vela-green/theme.css`),
    "vela-orange": () =>
      import(`primereact/resources/themes/vela-orange/theme.css`),
    "vela-purple": () =>
      import(`primereact/resources/themes/vela-purple/theme.css`),
  },
  dark: {
    "arya-blue": () =>
      import(`primereact/resources/themes/arya-blue/theme.css`),
    "arya-green": () =>
      import(`primereact/resources/themes/arya-green/theme.css`),
    "arya-orange": () =>
      import(`primereact/resources/themes/arya-orange/theme.css`),
    "arya-purple": () =>
      import(`primereact/resources/themes/arya-purple/theme.css`),
  },
};

// Define theme color classes for visual representation
const themeColorClasses: Record<string, string> = {
  "saga-blue": "bg-blue-600",
  "saga-green": "bg-green-600",
  "saga-orange": "bg-orange-600",
  "saga-purple": "bg-purple-600",
  "vela-blue": "bg-blue-600",
  "vela-green": "bg-green-600",
  "vela-orange": "bg-orange-600",
  "vela-purple": "bg-purple-600",
  "arya-blue": "bg-blue-600",
  "arya-green": "bg-green-600",
  "arya-orange": "bg-orange-600",
  "arya-purple": "bg-purple-600",
};

const scaleOptions = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const FNThemeSidebar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const onThemeChange = (theme: string, selectedColorScheme: string = "light") => {
    const selectedThemeImport = themeImports[selectedColorScheme][theme];
    if (selectedThemeImport) {
      selectedThemeImport()
        .then(() => {
          console.log(
            `Theme ${theme} (${selectedColorScheme}) loaded successfully.`
          );
        })
        .catch((error: any) => {
          console.error(
            `Failed to load theme ${theme} (${selectedColorScheme})`,
            error
          );
        });
    } else {
      console.error(`Theme ${theme} (${selectedColorScheme}) does not exist.`);
    }
  };

  const renderThemeOptions = (
    themeImport: Record<string, () => Promise<any>>,
    selectedColorScheme : string
  ) => {
    return (
      <div className="flex flex-wrap gap-3">
        {Object.keys(themeImport).map((theme) => (
          <div
            key={theme}
            className="cursor-pointer"
            onClick={() => onThemeChange(theme, selectedColorScheme)}
          >
            <span
              className={`p-link w-2rem h-2rem border-circle flex-shrink-0 flex items-center justify-center ${
                themeColorClasses[theme]
              }`}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-screen h-screen z-5 cursor-pointer flex justify-content-end align-items-center absolute-position right-0 top-50 translateY-50">
      <FNButton
        className="z-5"
        onClick={() => setVisible(true)}
        icon={"pi pi-cog"}
        label={""}
      ></FNButton>
      <Sidebar
        position="right"
        className="w-2"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <h3 className="text-xl">Select a Theme</h3>

        <div>
          <h6 className="text-sm">Light Theme</h6>

          {renderThemeOptions(themeImports.light, "light")}
          <Divider />
          <h6 className="mt-4 text-sm">Dim Theme</h6>
          {renderThemeOptions(themeImports.dim, "dim")}
          <Divider />
          <h6 className="mt-4 text-sm">Dark Theme</h6>
          {renderThemeOptions(themeImports.dark, "dark")}
        </div>
      </Sidebar>
    </div>
  );
};

export default FNThemeSidebar;
