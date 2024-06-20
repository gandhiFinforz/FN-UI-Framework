import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import { mount } from "@cypress/react";
import TextAreaField from "./InputTextAreaField";

describe("<TextAreaField />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<TextAreaField name={""} />);
    cy.screenshot("component/TextAreaField/renders");
  });

  it("displays the correct value", () => {
    const value = "Test Value";
    mount(
      <TextAreaField
        value={value}
        id="textarea"
        label="Label for textarea"
        name={""}
      />
    );
    cy.get("textarea#textarea").should("have.value", value);
    cy.screenshot("component/TextAreaField/displays the correct value");
  });

  it("calls onChange when value changes", () => {
    const handleChange = cy.stub().as("handleChange");
    mount(
      <TextAreaField
        id="textarea"
        label="Label for textarea"
        onChange={handleChange}
        name={""}
      />
    );
    cy.get("textarea#textarea").type("New Value");
    cy.get("@handleChange").should("have.been.called");
    cy.screenshot("component/TextAreaField/calls onChange when value changes");
  });

  it("is disabled when disabled prop is true", () => {
    mount(
      <TextAreaField
        id="textarea"
        label="Label for textarea"
        disabled
        name={""}
      />
    );
    cy.get("textarea#textarea").should("be.disabled");
    cy.screenshot(
      "component/TextAreaField/is disabled when disabled prop is true"
    );
  });

  it("applies invalid state when invalid prop is true", () => {
    mount(
      <TextAreaField
        id="textarea"
        label="Label for textarea"
        invalid
        name={""}
      />
    );
    cy.get("textarea#textarea").should("have.class", "p-invalid");
    cy.screenshot(
      "component/TextAreaField/applies invalid state when invalid prop is true"
    );
  });

  it("applies custom class name", () => {
    const className = "custom-textarea";
    mount(
      <TextAreaField
        id="textarea"
        label="Label for textarea"
        className={className}
        name={""}
      />
    );
    cy.get("textarea#textarea").should("have.class", className);
    cy.screenshot("component/TextAreaField/applies custom class name");
  });

  it("renders with specified size", () => {
    mount(
      <TextAreaField
        id="textarea"
        label="Label for textarea"
        size="lg"
        name={""}
      />
    );
    cy.get("textarea#textarea").should("have.class", "p-inputtext-lg");
    cy.screenshot("component/TextAreaField/renders with specified size");
  });

  it("applies unstyled when unstyled prop is true", () => {
    mount(
      <TextAreaField
        id="textarea"
        label="Label for textarea"
        unstyled
        name={""}
      />
    );
    cy.get("textarea#textarea").should("not.have.class", "p-inputtext");
    cy.screenshot(
      "component/TextAreaField/applies unstyled when unstyled prop is true"
    );
  });
});
