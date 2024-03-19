// Define an interface for API functions
export interface TestFunctions {
    login: (adminUserName: string, adminPassword: string) => Cypress.Chainable<Cypress.Response<any>>;
    getPersonIdentity: (authToken: string, personPublicKey: string) => Cypress.Chainable<Cypress.Response<any>>;
    getPersonEnrollment: (authToken: string, personPublicKey: string) => Cypress.Chainable<Cypress.Response<any>>;
    getClients: ( authToken: string) => Cypress.Chainable<Cypress.Response<any>>;
  }