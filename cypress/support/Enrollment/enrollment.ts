import { TestFunctions } from './../interfaces';

// Define the function to test the authentication API
export const getPersonEnrollment: TestFunctions['getPersonEnrollment'] = (authToken: string, personPublicKey: string): Cypress.Chainable<Cypress.Response<any>> => {
    const hixmeBaseUrl = Cypress.env('hixmeBaseUrl');
    return cy.request({
        method: 'GET',
        url: `${hixmeBaseUrl}/enrollment/enrollments/enrollments/${personPublicKey}`,
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
};
