import { TestFunctions } from './../interfaces';

// Define the function to test the authentication API
export const getClients: TestFunctions['getClients'] = (authToken: string): Cypress.Chainable<Cypress.Response<any>> => {
  const hixmeBaseUrl = Cypress.env('hixmeBaseUrl');
  return cy.request({
    method: 'GET',
    url: `${hixmeBaseUrl}/client/clients`,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });
};
