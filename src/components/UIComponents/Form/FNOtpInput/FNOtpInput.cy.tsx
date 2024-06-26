/// <reference types="cypress" />
import { mount } from "@cypress/react";
import FNOtpInput from "./FNOtpInput";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("<FNOtpInput />", () => {
  it("renders with label", () => {
    mount(<FNOtpInput name="otp" label="Enter OTP" value="" />);
    cy.get("label").contains("OTP").should("exist");
  });

  it("enters OTP value correctly", () => {
    const otpValue = "123456";
    mount(<FNOtpInput name="otp" label="Enter OTP" value={otpValue} />);
    cy.get(".p-inputotp-input").should("have.value", 1);
  });

  it("disables OTP input when disabled prop is true", () => {
    mount(<FNOtpInput name="otp" label="Enter OTP" value="" disabled={true} />);
    cy.get("input.p-inputtext").should("be.disabled");
  });

  it("applies outlined variant correctly", () => {
    mount(
      <FNOtpInput name="otp" label="Enter OTP" value="" variant="outlined" />
    );
    cy.get(".p-inputotp-input").should("exist");
  });

  it("displays help text correctly", () => {
    const helpText = "Please enter the OTP received on your mobile.";
    mount(
      <FNOtpInput name="otp" label="Enter OTP" value="" helpText={helpText} />
    );
    cy.get("small.p-error").contains(helpText).should("exist");
  });
});
