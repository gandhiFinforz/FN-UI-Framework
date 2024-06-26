import FNInputSwitch from './FNInputSwitch';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css'; 
import { mount } from '@cypress/react';

describe('<FNInputSwitch />', () => {
  it('renders', () => {
    mount(<FNInputSwitch checked={false} onChange={() => {}} onBlur={() => {}} />);
    cy.get('div[data-pc-name="inputswitch"]').should('exist');
    cy.screenshot('component/FNInputSwitch/renders');
  });

  it('displays the correct checked state', () => {
    mount(<FNInputSwitch checked={true} onChange={() => {}} onBlur={() => {}} id="input-switch" />);
    cy.get('div[data-pc-name="inputswitch"]').should('have.attr', 'aria-checked', 'true');
    cy.screenshot('component/FNInputSwitch/displays the correct checked state');
  });

  it('calls onChange when checked state changes', () => {
    const handleChange = cy.stub().as('handleChange');
    mount(<FNInputSwitch checked={false} onChange={handleChange} onBlur={() => {}} id="input-switch" />);
    cy.get('div[data-pc-name="inputswitch"]').click();
    cy.get('@handleChange').should('have.been.called');
    cy.screenshot('component/FNInputSwitch/calls onChange when checked state changes');
  });

  it('is disabled when disabled prop is true', () => {
    mount(<FNInputSwitch checked={false} disabled onChange={() => {}} onBlur={() => {}} id="input-switch" />);
    cy.get('div[data-pc-name="inputswitch"]').should('have.attr', 'data-p-disabled', 'true');
    cy.screenshot('component/FNInputSwitch/is disabled when disabled prop is true');
  });

  it('applies invalid state when invalid prop is true', () => {
    mount(<FNInputSwitch checked={false} invalid onChange={() => {}} onBlur={() => {}} id="input-switch" />);
    cy.get('div[data-pc-name="inputswitch"]').should('have.class', 'p-invalid');
    cy.screenshot('component/FNInputSwitch/applies invalid state when invalid prop is true');
  });

  it('applies custom class name', () => {
    const className = 'custom-input-switch';
    mount(<FNInputSwitch checked={false} className={className} onChange={() => {}} onBlur={() => {}} id="input-switch" />);
    cy.get('div[data-pc-name="inputswitch"]').should('have.class', className);
    cy.screenshot('component/FNInputSwitch/applies custom class name');
  });

  it('applies unstyled when unstyled prop is true', () => {
    mount(<FNInputSwitch checked={false} unstyled onChange={() => {}} onBlur={() => {}} id="input-switch" />);
    cy.get('div[data-pc-name="inputswitch"]').should('not.have.class', 'p-inputswitch');
    cy.screenshot('component/FNInputSwitch/applies unstyled when unstyled prop is true');
  });
});
