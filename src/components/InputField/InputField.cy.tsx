import InputField from './InputField';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css'; 
import { mount } from '@cypress/react';
describe('<InputField />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    mount(<InputField type={'number'} name={''} />);
    cy.screenshot('component/InputField/renders');
  });



  it('displays the correct value', () => {
    const value = 'Test Value';
    mount(<InputField type="text" value={value} id="input-text" label="Label for text" name={''} />);
    cy.get('input#input-text').should('have.value', value);
    cy.screenshot('component/InputField/displays the correct value');
  });

  it('calls onChange when value changes', () => {
    const handleChange = cy.stub().as('handleChange');
    mount(<InputField type="text" id="input-text" label="Label for text" onChange={handleChange} name={''} />);
    cy.get('input#input-text').type('New Value');
    cy.get('@handleChange').should('have.been.called');
    cy.screenshot('component/InputField/calls onChange when value changes');
  });

  it('is disabled when disabled prop is true', () => {
    mount(<InputField type="text" id="input-text" label="Label for text" disabled name={''} />);
    cy.get('input#input-text').should('be.disabled');
    cy.screenshot('component/InputField/is disabled when disabled prop is true');
  });

  it('applies invalid state when invalid prop is true', () => {
    mount(<InputField type="text" id="input-text" label="Label for text" invalid name={''} />);
    cy.get('input#input-text').should('have.class', 'p-invalid');
    cy.screenshot('component/InputField/applies invalid state when invalid prop is true');
  });


  it('applies custom class name', () => {
    const className = 'custom-input';
    mount(<InputField type="text" id="input-text" label="Label for text" className={className} name={''} />);
    cy.get('input#input-text').should('have.class', className);
    cy.screenshot('component/InputField/applies custom class name');
  });

  it('renders with specified size', () => {
    mount(<InputField type="text" id="input-text" label="Label for text" size="lg" name={''} />);
    cy.get('input#input-text').should('have.class', 'p-inputtext-lg');
    cy.screenshot('component/InputField/renders with specified size');
  });

  it('applies unstyled when unstyled prop is true', () => {
    mount(<InputField type="text" id="input-text" label="Label for text" unstyled name={''} />);
    cy.get('input#input-text').should('not.have.class', 'p-inputtext');
    cy.screenshot('component/InputField/applies unstyled when unstyled prop is true');
  });

});
