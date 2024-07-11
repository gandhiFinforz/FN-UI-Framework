/// <reference types="cypress" />
import { mount } from "@cypress/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RequestOTP from "./RequestOTP";

describe("<RequestOTP />", () => {
  beforeEach(() => {
    mount(
      <Router>
        <RequestOTP />
      </Router>
    );
  });

  it("navigates to OTP verification page on valid phone number submission", () => {
    const phoneNumber = "+91834567890";

    cy.get("input#phone-input").type(phoneNumber);
    cy.get(".p-button").click();

    cy.location().should((loc) => {
      const location = loc as any;
      expect(location.pathname).to.eq("/owner-login/verify-otp");
      expect(location.state).to.deep.equal(undefined);
    });
  });
});
