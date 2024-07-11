/// <reference types="cypress" />
import { mount } from "@cypress/react";
import FNPhoneInput from "./FNPhoneInput";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "react-phone-input-2/lib/style.css";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        "Enter Phone Number": "Enter Phone Number",
        "Please enter your phone number.": "Please enter your phone number.",
      },
    },
  },
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("<FNPhoneInput />", () => {
  it("renders with label", () => {
    mount(
      <I18nextProvider i18n={i18n}>
        <FNPhoneInput name="phone" label="Enter Phone Number" value="" />
      </I18nextProvider>
    );
    cy.get("label").contains("Enter Phone Number").should("exist");
  });

  it("enters phone number value correctly", () => {
    const phoneValue = "9876543210";
    const formattedPhoneValue = "+98 765 432 10"; // Adjust this as needed
    mount(
      <I18nextProvider i18n={i18n}>
        <FNPhoneInput
          name="phone"
          label="Enter Phone Number"
          value={phoneValue}
        />
      </I18nextProvider>
    );
    cy.get("input").should("have.value", formattedPhoneValue);
  });

  it("disables phone input when disabled prop is true", () => {
    mount(
      <I18nextProvider i18n={i18n}>
        <FNPhoneInput
          name="phone"
          label="Enter Phone Number"
          value=""
          disabled={true}
        />
      </I18nextProvider>
    );
    cy.get("input").should("be.disabled");
  });

  it("applies outlined variant correctly", () => {
    mount(
      <I18nextProvider i18n={i18n}>
        <FNPhoneInput
          name="phone"
          label="Enter Phone Number"
          value=""
          variant="outlined"
        />
      </I18nextProvider>
    );
    cy.get("input.p-inputtext-outlined").should("exist");
  });

  it("displays help text correctly", () => {
    const helpText = "Please enter your phone number.";
    mount(
      <I18nextProvider i18n={i18n}>
        <FNPhoneInput
          name="phone"
          label="Enter Phone Number"
          value=""
          helpText={helpText}
          showHelpText={true}
        />
      </I18nextProvider>
    );
    cy.get("small.p-error").contains(helpText).should("exist");
  });
});
