import { TestFunctions } from './../interfaces';

// Define the function to test the authentication API
export const getPersonIdentity: TestFunctions['getPersonIdentity'] = (authToken: string, personPublicKey: string): Cypress.Chainable<Cypress.Response<any>> => {
    const hixmeBaseUrl = Cypress.env('hixmeBaseUrl');
    return cy.request({
        method: 'GET',
        url: `${hixmeBaseUrl}/person/identity?personPublicKey=${personPublicKey}`,
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
};
