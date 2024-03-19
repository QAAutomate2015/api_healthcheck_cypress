// authApi.spec.ts

import { getPersonIdentity } from '../../../support/Person/person';
import { login } from '../../../support/Auth/auth';


describe('Person Identity API Tests - HealthChec', () => {
    let authToken: string | null;
    beforeEach(() => {
        const adminUserName = Cypress.env('adminUserName');
        const adminPassword = Cypress.env('adminPassword');
        
        login(adminUserName,adminPassword).then((response) => {
            expect(response.status).to.eq(200);
            authToken = response.body.idToken;
        });

        cy.fixture('employee').as('employeeData');
    });

    it('should return a successful response', () => {
        cy.get('@employeeData').then(employee => {
            getPersonIdentity(authToken,employee.personPublicKey).then((response) => {
                expect(response.status).to.eq(200);
            });
        })
    });
});