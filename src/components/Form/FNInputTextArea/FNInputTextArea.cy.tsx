import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import { mount } from "@cypress/react";
import FNTextArea from "./FNInputTextArea";

describe("<FNTextArea />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<FNTextArea name={""} />);
    cy.screenshot("component/FNTextArea/renders");
  });

  it("displays the correct value", () => {
    const value = "Test Value";
    mount(
      <FNTextArea
        value={value}
        id="textarea"
        label="Label for textarea"
        name={""}
      />
    );
    cy.get("textarea#textarea").should("have.value", value);
    cy.screenshot("component/FNTextArea/displays the correct value");
  });

  it("calls onChange when value changes", () => {
    const handleChange = cy.stub().as("handleChange");
    mount(
      <FNTextArea
        id="textarea"
        label="Label for textarea"
        onChange={handleChange}
        name={""}
      />
    );
    cy.get("textarea#textarea").type("New Value");
    cy.get("@handleChange").should("have.been.called");
    cy.screenshot("component/FNTextArea/calls onChange when value changes");
  });

  it("is disabled when disabled prop is true", () => {
    mount(
      <FNTextArea
        id="textarea"
        label="Label for textarea"
        disabled
        name={""}
      />
    );
    cy.get("textarea#textarea").should("be.disabled");
    cy.screenshot(
      "component/FNTextArea/is disabled when disabled prop is true"
    );
  });

  it("applies invalid state when invalid prop is true", () => {
    mount(
      <FNTextArea
        id="textarea"
        label="Label for textarea"
        invalid
        name={""}
      />
    );
    cy.get("textarea#textarea").should("have.class", "p-invalid");
    cy.screenshot(
      "component/FNTextArea/applies invalid state when invalid prop is true"
    );
  });

  it("applies custom class name", () => {
    const className = "custom-textarea";
    mount(
      <FNTextArea
        id="textarea"
        label="Label for textarea"
        className={className}
        name={""}
      />
    );
    cy.get("textarea#textarea").should("have.class", className);
    cy.screenshot("component/FNTextArea/applies custom class name");
  });

  it("renders with specified size", () => {
    mount(
      <FNTextArea
        id="textarea"
        label="Label for textarea"
        size="lg"
        name={""}
      />
    );
    cy.get("textarea#textarea").should("have.class", "p-inputtext-lg");
    cy.screenshot("component/FNTextArea/renders with specified size");
  });

  it("applies unstyled when unstyled prop is true", () => {
    mount(
      <FNTextArea
        id="textarea"
        label="Label for textarea"
        unstyled
        name={""}
      />
    );
    cy.get("textarea#textarea").should("not.have.class", "p-inputtext");
    cy.screenshot(
      "component/FNTextArea/applies unstyled when unstyled prop is true"
    );
  });
});
