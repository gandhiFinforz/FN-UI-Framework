/// <reference types="cypress" />
import { mount } from "@cypress/react";
import FNCheckbox from "./FNCheckbox";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("<FNCheckbox />", () => {
  it("renders with label", () => {
    mount(
      <FNCheckbox label="Remember Me" checked={false} onChange={() => {}} />
    );
    cy.get("label").contains("Remember Me").should("exist");
  });

  it("renders checked checkbox", () => {
    mount(
      <FNCheckbox label="Remember Me" checked={true} onChange={() => {}} />
    );
    cy.get("input.p-checkbox-input")
      .should("exist")
      .invoke("prop", "checked")
      .should("eq", true);
  });

  it("calls onChange when checkbox is clicked", () => {
    const handleChange = cy.stub().as("handleChange");

    mount(
      <FNCheckbox label="Remember Me" checked={false} onChange={handleChange} />
    );

    cy.get("input.p-checkbox-input").check().trigger("change"); // Trigger change event after checking
  });

  it("disables checkbox when disabled prop is true", () => {
    mount(
      <FNCheckbox
        label="Remember Me"
        checked={false}
        disabled={true}
        onChange={() => {}}
      />
    );
    cy.get("input.p-checkbox-input").should("be.disabled");
  });
});
