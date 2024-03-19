// authApi.spec.ts

import { getPersonEnrollment } from '../../../support/Enrollment/enrollment';
import { login } from '../../../support/Auth/auth';


describe('Person Enrollment API Tests', () => {
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
            getPersonEnrollment(authToken,employee.personPublicKey).then((response) => {
                expect(response.status).to.eq(200);
            });
        })
    });
});