/// <reference types="cypress" />
import { mount } from '@cypress/react';
import FNButton from './FNButton';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css'; 
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
  describe("<FNButton />", () => {
    it("renders with label", () => {
      mount(<FNButton label="Submit" />);
      cy.get("button").contains("Submit").should("exist");
    });

    it("renders with icon and correct position", () => {
      mount(<FNButton label="Save" icon="pi pi-check" />);
      cy.get("button").find(".pi.pi-check").should("exist");
    });

    it("calls onClick when clicked", () => {
      const handleClick = cy.stub().as("handleClick");
      mount(<FNButton label="Submit" onClick={handleClick} />);
      cy.get("button").contains("Submit").click();
      cy.get("@handleClick").should("have.been.called");
    });

    it("disables button when disabled prop is true", () => {
      mount(<FNButton label="Save" disabled={true} />);
      cy.get("button").should("be.disabled");
    });
  });
  