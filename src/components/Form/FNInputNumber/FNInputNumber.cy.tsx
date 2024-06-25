import React from 'react';
import FNInputNumber from './FNInputNumber';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css';
import { mount } from '@cypress/react';

describe('<FNInputNumber />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<FNInputNumber name="test-input-number" />);
    cy.screenshot('component/FNInputNumber/renders');
  });

  it('displays the correct value', () => {
    const value = 123;
    mount(<FNInputNumber value={value} id="input-number" label="Label for number" name="test-input-number" />);
    cy.get('input.p-inputnumber-input').should('have.value', value);
    cy.screenshot('component/FNInputNumber/displays the correct value');
  });

  it('calls onChange when value changes', () => {
    const handleChange = cy.stub().as('handleChange');
    mount(<FNInputNumber id="input-number" label="Label for number" onChange={handleChange} name="test-input-number" />);
    cy.get('input.p-inputnumber-input').type('456');
    cy.get('@handleChange').should('have.been.called');
    cy.screenshot('component/FNInputNumber/calls onChange when value changes');
  });

  it('is disabled when disabled prop is true', () => {
    mount(<FNInputNumber id="input-number" label="Label for number" disabled name="test-input-number" />);
    cy.get('input.p-inputnumber-input').should('be.disabled');
    cy.screenshot('component/FNInputNumber/is disabled when disabled prop is true');
  });



});
