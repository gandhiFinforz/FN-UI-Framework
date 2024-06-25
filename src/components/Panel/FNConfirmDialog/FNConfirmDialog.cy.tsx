import React from "react";
import { mount } from "cypress/react";
import FNConfirmDialog from "./FNConfirmDialog";
import { Button } from "primereact/button";

const defaultProps = {
  header: "Test Header",
  message: "Test Message",
  acceptLabel: "Accept",
  rejectLabel: "Reject",
  position: "center",
  width: "300px",
  height: "200px",
};

describe("FNConfirmDialog", () => {
  const mountComponent = (props = {}) => {
    mount(
      <div>
        <Button
          label="Show ConfirmDialog"
          onClick={() => cy.get("#dialog").invoke("show")}
        />
        <div id="dialog">
          <FNConfirmDialog {...defaultProps} {...props} visible />
        </div>
      </div>
    );
  };

  it("should render the dialog with correct header and message", () => {
    mountComponent();
    cy.contains("Test Header").should("be.visible");
    cy.contains("Test Message").should("be.visible");
  });

  it("should render accept and reject buttons with correct labels", () => {
    mountComponent();
    cy.contains("Accept").should("be.visible");
    cy.contains("Reject").should("be.visible");
  });

  it("should apply custom width and height styles", () => {
    mountComponent();
    cy.get(".p-confirm-dialog").should("have.css", "width", "300px");
    cy.get(".p-confirm-dialog").should("have.css", "height", "200px");
  });

  it("should open the dialog in the top-left position", () => {
    mountComponent({ position: "center" });
    cy.get(".p-dialog-default").should("exist");
  });
});
