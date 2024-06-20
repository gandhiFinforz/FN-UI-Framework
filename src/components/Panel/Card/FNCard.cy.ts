describe("CardComponent", () => {
  it("should display card with title and content", () => {
    cy.visit("/iframe.html?id=components-cardcomponent--default");
    cy.get(".p-card-title").should("contain", "Card Title");
    cy.get(".p-card-subtitle").should("contain", "Card Subtitle");
    cy.get(".p-card-body").should("contain", "Card content goes here.");
  });

  it("should display card with footer", () => {
    cy.visit("/iframe.html?id=components-cardcomponent--with-footer");
    cy.get(".p-card-footer").should("contain", "Footer content goes here.");
  });

  it("should display card with header", () => {
    cy.visit("/iframe.html?id=components-cardcomponent--with-header");
    cy.get(".p-card-header").should("contain", "Header content goes here.");
  });
});
