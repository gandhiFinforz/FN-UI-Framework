import React from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import { mount } from "@cypress/react";
import AutoCompleteField from "./AutoCompleteField";

describe("<AutoCompleteField />", () => {
  it("renders", () => {
    mount(<AutoCompleteField suggestions={[]} />);
    cy.screenshot("component/AutoCompleteField/renders");
  });

  it("displays suggestions on input", () => {
    const suggestions = [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
    ];
    mount(<AutoCompleteField suggestions={suggestions} />);
    cy.get("input").type("Option");
    cy.get(".p-autocomplete-items")
      .should("contain", "Option 1")
      .and("contain", "Option 2");
    cy.screenshot("component/AutoCompleteField/displays suggestions on input");
  });

  it("selects a suggestion on click", () => {
    const suggestions = [
      { label: "Option 1", value: 1 },
      { label: "Option 2", value: 2 },
    ];
    mount(<AutoCompleteField suggestions={suggestions} />);
    cy.get("input").type("Option");
    cy.get(".p-autocomplete-items").contains("Option 1").click();
    cy.get("input").should("have.value", "Option 1");
    cy.screenshot("component/AutoCompleteField/selects a suggestion on click");
  });

  it("disables the component", () => {
    mount(<AutoCompleteField suggestions={[]} disabled />);
    cy.get("input").should("be.disabled");
    cy.screenshot("component/AutoCompleteField/disables the component");
  });

  it("displays a tooltip", () => {
    mount(<AutoCompleteField suggestions={[]} tooltip="This is a tooltip" />);
    cy.get("input").trigger("mouseover");
    cy.get(".p-tooltip").should("contain", "This is a tooltip");
    cy.screenshot("component/AutoCompleteField/displays a tooltip");
  });

  it("displays the dropdown button", () => {
    mount(<AutoCompleteField suggestions={[]} dropdown />);
    cy.get(".p-autocomplete-dropdown").should("exist");
    cy.screenshot("component/AutoCompleteField/displays the dropdown button");
  });
});
