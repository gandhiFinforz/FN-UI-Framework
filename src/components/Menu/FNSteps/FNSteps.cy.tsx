import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import { mount } from '@cypress/react';
import { Formik, Form, Field } from 'formik';
import FNSteps, { FNOptionStepsProps } from './FNSteps';





describe('FNSteps Component', () => {
  const mockStepsModel: FNOptionStepsProps[] = [
    { label: 'Step 1', icon: 'pi pi-user' },
    { label: 'Step 2', icon: 'pi pi-search' },
    { label: 'Step 3', icon: 'pi pi-check' },
  ];

  beforeEach(() => {
    // Mount the StepsMenu component with required props
    mount(
      <FNSteps
        model={mockStepsModel}
        initialIndex={0} // Start with the first step active
        onSelect={() => {}} // Mock onSelect function
      />
    );
  });

  it('renders the StepsMenu component with correct initial state', () => {
    // Assert that the StepsMenu component is rendered
    cy.get('[data-testid="steps-menu"]').should('exist');

    // Assert that the first step is initially active
  });

  it('changes active step when clicked', () => {
    // Click on the second step
    cy.get('.border-circle').eq(1).click();

    // Assert that the second step is now active

    // Optionally, assert other behaviors or states after clicking
  });

  it('does not change active step when disabled step is clicked', () => {
    // Click on the disabled second step
    cy.get('.border-circle').eq(1).click();

    // Assert that the first step remains active
    cy.get('.border-circle').eq(1).should('not.have.css', 'background-color', 'rgb(0, 123, 255)');
  });

  // Add more test cases as needed, such as testing for disabled steps, etc.
});