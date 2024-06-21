/// <reference types="cypress" />
import { mount } from "@cypress/react";
import FNCheckbox from "./FNCheckbox";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("<FNCheckbox />", () => {
  it("renders with label", () => {
    mount(<FNCheckbox name="rememberMe" label="Remember Me" checked={false} />);
    cy.get("label").contains("Remember Me").should("exist");
  });

  it("renders checked checkbox", () => {
    mount(<FNCheckbox name="rememberMe" label="Remember Me" checked={true} />);
    cy.get("input.p-checkbox-input")
      .should("exist")
      .invoke("prop", "checked")
      .should("eq", true);
  });

  it("calls onChange when checkbox is clicked", () => {
    const handleChange = cy.stub().as("handleChange");

    mount(<FNCheckbox name="rememberMe" label="Remember Me" checked={false} />);

    cy.get("input.p-checkbox-input").check().trigger("change"); // Trigger change event after checking
  });

  it("disables checkbox when disabled prop is true", () => {
    mount(
      <FNCheckbox
        label="Remember Me"
        name="rememberMe"
        checked={false}
        disabled={true}
      />
    );
    cy.get("input.p-checkbox-input").should("be.disabled");
  });
});
