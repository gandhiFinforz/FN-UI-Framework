import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import { mount } from "@cypress/react";
import FNTabs, { FNTab } from "./FNTab";

const defaultTabs: FNTab[] = [
  {
    header: "Tab 1",
    content: <p>Content for Tab 1</p>,
  },
  {
    header: "Tab 2",
    content: <p>Content for Tab 2</p>,
  },
  {
    header: "Tab 3",
    content: <p>Content for Tab 3</p>,
  },
];
const disabledTabs: FNTab[] = [
  {
    header: "Tab 1",
    content: <p>Content for Tab 1</p>,
  },
  {
    header: "Tab 2 (Disabled)",
    content: <p>Content for Tab 2</p>,
    disabled: true,
  },
  {
    header: "Tab 3",
    content: <p>Content for Tab 3</p>,
  },
];
const scrollableTabs: FNTab[] = Array.from({ length: 15 }, (_, i) => ({
  header: `Tab ${i + 1}`,
  content: <p>Content for Tab {i + 1}</p>,
}));
describe("<FNTabs />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<FNTabs tabs={defaultTabs} />);
    cy.screenshot("component/FNTabs/renders");
  });
  it("renders with default tabs", () => {
    mount(<FNTabs tabs={defaultTabs} />);
    // Assert that the FNTabs component renders
    cy.get(".p-tabview").should("exist");

    // Assert that the tabs headers are rendered
    cy.contains("Tab 1").should("exist");
    cy.contains("Tab 2").should("exist");
    cy.contains("Tab 3").should("exist");

    // Assert that the content of the first tab is visible
    cy.contains("Content for Tab 1").should("be.visible");
    cy.screenshot("component/FNTabs/renders");
  });

  it("changes tab on click", () => {
    mount(<FNTabs tabs={defaultTabs} />);
    // Click on the second tab
    cy.contains("Tab 2").click();

    // Assert that Tab 2 is active
    cy.get('.p-tabview-selected.p-highlight:contains("Tab 2")').should("exist");

    // Assert that the content of Tab 2 is visible
    cy.contains("Content for Tab 2").should("be.visible");

    // Click on the third tab
    cy.contains("Tab 3").click();

    // // Assert that Tab 3 is active
    cy.get('.p-tabview-selected.p-highlight:contains("Tab 3")').should("exist");

    // // Assert that the content of Tab 3 is visible
    cy.contains("Content for Tab 3").should("be.visible");
    cy.screenshot("component/FNTabs/renders");
  });

  it("disables tab 2", () => {
    mount(<FNTabs tabs={disabledTabs} />);
    // Assert that Tab 2 is rendered and visible
    cy.contains("Tab 2 (Disabled)").should("be.visible");
    cy.get(".p-unselectable-text").should("have.class", "p-disabled");
    // // Assert that Tab 2 is disabled and not active
    cy.get(
      '.p-unselectable-text.p-disabled:contains("Tab 2 (Disabled)")'
    ).should("exist");
  });

  it("renders with closable tabs and closes a tab", () => {
    mount(<FNTabs tabs={defaultTabs} closable />);

    // Assert that the tabs headers are rendered
    cy.contains("Tab 1").should("exist");
    cy.contains("Tab 2").should("exist");
    cy.contains("Tab 3").should("exist");

    // Close the second tab
    cy.get(".p-tabview-close").eq(1).click();

    // Assert that Tab 2 is closed and no longer rendered
    cy.contains("Tab 2").should("not.exist");

    cy.screenshot("component/FNTabs/renders-closable");
  });

  it("renders with scrollable tabs and scrolls through tabs using next and previous buttons", () => {
    mount(<FNTabs tabs={scrollableTabs} scrollable />);

    // Assert that the FNTabs component renders
    cy.get(".p-tabview").should("exist");

    // Assert that the first few tab headers are rendered initially
    cy.contains("Tab 1").should("be.visible");
    cy.contains("Tab 2").should("be.visible");
    cy.contains("Tab 3").should("be.visible");

    // Assert that the previous and next scroll buttons are present
    cy.get(".p-tabview-nav-next").should("exist");

    // Click the next button to scroll through tabs
    cy.get(".p-tabview-nav-next").click();

    cy.get(".p-tabview-nav-prev").should("exist");

    // Click the previous button to scroll back
    cy.get(".p-tabview-nav-prev").click();

    // Take a screenshot of the scrollable tabs
    cy.screenshot("component/FNTabs/renders-scrollable");
  });
});
