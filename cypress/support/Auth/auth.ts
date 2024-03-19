import { TestFunctions } from './../interfaces';

// Define the function to test the authentication API
export const login: TestFunctions['login'] = (adminUserName: string, adminPassword: string): Cypress.Chainable<Cypress.Response<any>> => {
    const awsBaseUrl = Cypress.env('awsBaseUrl');
    return cy.request({
        method: 'POST',
        url: `${awsBaseUrl}/int/user/login`,
        body: { "username":adminUserName,"password":adminPassword},
        headers: {
            "Content-Type": "application/json"
        }
    });
};
