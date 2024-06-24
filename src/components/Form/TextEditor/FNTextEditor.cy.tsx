import { mount } from "@cypress/react";
import FNTextEditor from "./FNTextEditor";

describe("<FNTextArea />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    mount(<FNTextEditor value={""} />);
    cy.screenshot("component/FNTextArea/renders");
  });
});
