import { mount } from "@cypress/react";
import FNTextEditor from "./FNTextEditor";
const renderHeader = () => {
  return (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold"></button>
      <button className="ql-italic" aria-label="Italic"></button>
      <button className="ql-underline" aria-label="Underline"></button>
    </span>
  );
};

const header = renderHeader();

describe("<FNTextEditor />", () => {
  it("renders", () => {
    mount(<FNTextEditor value={""} />);
    cy.screenshot("component/FNTextEditor/renders");
  });
  it("should allow text input", () => {
    mount(<FNTextEditor value={""} />);
    const newText = "New text content";
    cy.get(".ql-editor").clear().type(newText);
    cy.get(".ql-editor").should("contain.text", newText);
    cy.screenshot("component/FNTextEditor/renders");
  });

  it("should apply custom height correctly", () => {
    mount(<FNTextEditor value={""} height="500px" />);
    cy.get(".ql-container").should("have.css", "height", "500px");
    cy.screenshot("component/FNTextEditor/renders");
  });
  it("should render with custom header template", () => {
    mount(<FNTextEditor value={""} headerTemplate={header} />);
    cy.get(".ql-formats").should("exist");
    cy.get(".ql-bold").should("exist");
    cy.get(".ql-italic").should("exist");
    cy.get(".ql-underline").should("exist");
    cy.screenshot("component/FNTextEditor/renders");
  });

  it("should check content is not editable while readonly", () => {
    mount(<FNTextEditor value={""} readOnly />);
    cy.get(".ql-editor").should("have.attr", "contenteditable", "false");
    cy.screenshot("component/FNTextEditor/renders");
  });

  it("should allow formatting with bold, italic, and underline", () => {
    mount(<FNTextEditor value={""} />);
    cy.get(".ql-bold").click();
    cy.get(".ql-editor").type("Bold text");
    cy.get(".ql-editor").find("strong").should("contain.text", "Bold text");

    cy.get(".ql-italic").click();
    cy.get(".ql-editor").type("Italic text");
    cy.get(".ql-editor").find("em").should("contain.text", "Italic text");

    cy.get(".ql-underline").click();
    cy.get(".ql-editor").type("Underlined text");
    cy.get(".ql-editor").find("u").should("contain.text", "Underlined text");
    cy.screenshot("component/FNTextEditor/renders");
  });
});
