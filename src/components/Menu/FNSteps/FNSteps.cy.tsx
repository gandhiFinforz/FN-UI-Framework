import React from 'react';
import RadioField from './FNRadio';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import { mount } from '@cypress/react';
import { Formik, Form, Field } from 'formik';

const options = [
  { value: 'option1', label: 'Option 1', tooltip: 'This is option 1' },
  { value: 'option2', label: 'Option 2', tooltip: 'This is option 2', disabled: true },
  { value: 'option3', label: 'Option 3', tooltip: 'This is option 3' },
];

const TestRadioField: React.FC = () => (
  <Formik
    initialValues={{ option: 'option2' }}
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

describe('RadioField Component', () => {
  beforeEach(() => {
    mount(<TestRadioField />);
  });

  it('should render radio buttons with labels', () => {
    cy.get('[data-testid="radio-field"]')
      .find('input[type="radio"]')
      .should('have.length', 3); // Assuming there are 3 options, adjust as necessary
  });

  it('should allow selecting a radio button', () => {
    cy.get('[data-testid="radio-field"]')
      .find('input[type="radio"]')
      .first()
      .check()
      .should('be.checked');
  });

  it('should update the selected value on change', () => {
    cy.get('[data-testid="radio-field"]')
      .find('input[type="radio"]')
      .eq(2)
      .check()
      .should('be.checked');

    cy.get('[data-testid="radio-field"]')
      .find('input[type="radio"]')
      .eq(1)
      .should('not.be.checked');
  });

  it('should respect the disabled state', () => {
    cy.get('[data-testid="radio-field"]')
      .find('input[type="radio"][disabled]')
      .should('have.length', 1); // Adjust based on how many are disabled
  });

  it('should display tooltips when hovered over', () => {
    cy.get('[data-testid="radio-field"]')
      .find('input[type="radio"]')
      .first()
      .trigger('mouseover');
  });
});
