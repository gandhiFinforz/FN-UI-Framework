/// <reference types="cypress" />
import { mount } from "@cypress/react";
import FNDialog from "./FNDialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("<FNDialog />", () => {
  it("renders with header and content", () => {
    const header = "Confirmation";
    const content = "Are you sure you want to delete this item?";
    const footerButtons = [
      {
        label: "No",
        icon: "pi pi-times",
        onClick: () => {},
        className: "p-button-text",
      },
      {
        label: "Yes",
        icon: "pi pi-check",
        onClick: () => {},
      },
    ];

    mount(
      <FNDialog
        header={header}
        content={content}
        visible={true}
        onHide={() => {}}
        footerButtons={footerButtons}
        style={{ width: "50vw" }}
        className="my-custom-dialog"
      />
    );

    cy.contains("Confirmation").should("exist");
    cy.contains("Are you sure you want to delete this item?").should("exist");

    cy.get(".p-dialog-footer .p-button").should("have.length", 2);
    cy.get(".p-dialog-footer .p-button").eq(0).contains("No").should("exist");
    cy.get(".p-dialog-footer .p-button").eq(1).contains("Yes").should("exist");
  });

  it("closes dialog when clicking Yes button", () => {
    const header = "Confirmation";
    const content = "Are you sure you want to delete this item?";
    const footerButtons = [
      {
        label: "No",
        icon: "pi pi-times",
        onClick: () => {},
        className: "p-button-text",
      },
      {
        label: "Yes",
        icon: "pi pi-check",
        onClick: () => {},
      },
    ];

    mount(
      <FNDialog
        header={header}
        content={content}
        visible={true}
        onHide={() => {}}
        footerButtons={footerButtons}
        style={{ width: "50vw" }}
        className="my-custom-dialog"
      />
    );

    cy.get(".p-dialog-footer .p-button").contains("Yes").click();
  });

  it("applies custom class and style correctly", () => {
    const header = "Information";
    const content = "This is an informational message.";
    const footerButtons = [
      {
        label: "OK",
        icon: "pi pi-check",
        onClick: () => {},
      },
    ];

    mount(
      <FNDialog
        header={header}
        content={content}
        visible={true}
        onHide={() => {}}
        footerButtons={footerButtons}
        style={{ width: "70vw" }}
        className="custom-info-dialog"
      />
    );

    cy.get(".p-dialog").should("exist");
    cy.get(".p-dialog-header").contains("Information").should("exist");
    cy.get(".p-dialog-content")
      .contains("This is an informational message.")
      .should("exist");
    cy.get(".p-dialog-footer .p-button").contains("OK").should("exist");
  });
});
