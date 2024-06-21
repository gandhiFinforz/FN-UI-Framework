import { mount } from "@cypress/react";
import FNAccordion from "./FNAccordion";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("<FNAccordion />", () => {
  it("renders with default tabs and open/close correctly", () => {
    const tabs = [
      { header: "Tab 1", content: "Content for the first tab" },
      { header: "Tab 2", content: "Content for the second tab" },
      { header: "Tab 3", content: "Content for the third tab" },
    ];

    mount(<FNAccordion tabs={tabs} />);

    cy.get(".p-accordion .p-accordion-header").should("have.length", 3);
    cy.get(".p-accordion .p-accordion-content").should("have.length", 3);

    cy.get(".p-accordion .p-accordion-header").eq(0).click();
    cy.get(".p-accordion .p-accordion-content").eq(0).should("be.visible");

    cy.get(".p-accordion .p-accordion-header").eq(1).click();
    cy.get(".p-accordion .p-accordion-content").eq(0).should("not.be.visible");
    cy.get(".p-accordion .p-accordion-content").eq(1).should("be.visible");
  });

  it("disables specific tabs correctly", () => {
    const tabs = [
      { header: "Tab 1", content: "Content for the first tab" },
      { header: "Tab 2", content: "Content for the second tab" },
      { header: "Tab 3", content: "Content for the third tab", disabled: true },
    ];

    mount(<FNAccordion tabs={tabs} />);

    cy.get(".p-accordion .p-accordion-header")
      .eq(2)
      .should("have.class", "p-disabled");
    cy.get(".p-accordion .p-accordion-header").eq(2).click();
    cy.get(".p-accordion .p-accordion-content").eq(2).should("not.be.visible");
  });

  it("applies custom icons and styles correctly", () => {
    const tabs = [
      { header: "Tab 1", content: "Content for the first tab" },
      { header: "Tab 2", content: "Content for the second tab" },
    ];

    mount(
      <FNAccordion
        tabs={tabs}
        expandIcon="pi pi-chevron-right"
        collapseIcon="pi pi-chevron-down"
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
        }}
      />
    );

    cy.get(".p-accordion .pi-chevron-right").should("have.length", 2); 

    cy.get(".p-accordion").should(
      "have.css",
      "border",
      "1px solid rgb(204, 204, 204)"
    );
    cy.get(".p-accordion").should("have.css", "border-radius", "8px");
    cy.get(".p-accordion").should("have.css", "padding", "10px");
  });
});
