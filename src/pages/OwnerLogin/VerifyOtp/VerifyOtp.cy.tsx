/// <reference types="cypress" />
import { mount } from "@cypress/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import VerifyOTP from "./VerifyOTP";

describe("<VerifyOTP />", () => {
  beforeEach(() => {
    mount(
      <Router>
        <VerifyOTP />
      </Router>
    );
  });

  it("displays phone number and verifies OTP on valid submission", () => {
    const phoneNumber = "+1234567890";
    const otpCode = "123456";
    cy.contains(`${phoneNumber}`).should("exist");
    cy.get(".p-inputtext").type(otpCode);
    cy.get(".p-button").click();
  });

  it("resends OTP after timer expires", () => {
    cy.get(".p-button").should("exist");
    cy.wait(31000);
    cy.get(".resend-btn").should("not.be.disabled");
    cy.get(".resend-btn").click();
    cy.get(".resend-btn").should("contain", "Resend OTP in 30s");
  });

  it("navigates back to OTP request page on back button click", () => {
    cy.get(".back-button").click();
    cy.url().should("include", "/owner-login/request-otp");
  });
});
