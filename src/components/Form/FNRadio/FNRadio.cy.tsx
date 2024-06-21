import RadioField from "./FNRadio";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import { mount } from "@cypress/react";
// cypress/integration/RadioField.spec.ts
// cypress/component/RadioField.cy.tsx

import React from "react";
import { Formik, Form, Field } from "formik";

const options = [
  { value: "option1", label: "Option 1", tooltip: "This is option 1" },
  {
    value: "option2",
    label: "Option 2",
    tooltip: "This is option 2",
    disabled: true,
  },
  { value: "option3", label: "Option 3", tooltip: "This is option 3" },
];

const TestRadioField: React.FC = () => (
  <Formik
    initialValues={{ option: "option2" }}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    <Form>
      <Field
        name="option"
        component={RadioField}
        options={options}
        variant="outlined"
      />
    </Form>
  </Formik>
);

describe("RadioField Component", () => {
  beforeEach(() => {
    mount(<TestRadioField />);
  });

  it("should render radio options", () => {
    cy.get('input[type="radio"]').should("have.length", 3);
  });

  it("should select an option", () => {
    cy.get('input[type="radio"]').first().check();
    cy.get('input[type="radio"]').first().should("be.checked");
  });

  it("should handle disabled option", () => {
    cy.get('input[type="radio"][disabled]').should("have.length", 1);
  });


  it("should select the correct initial value", () => {
    cy.get('input[type="radio"]').eq(1).should("be.checked");
  });

});
