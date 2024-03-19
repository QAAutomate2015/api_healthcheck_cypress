// authApi.spec.ts

import { getClients } from '../../../support/Client/client';
import { login } from '../../../support/Auth/auth';


describe('Client API Tests - HealthCheck', () => {
    let authToken: string | null;
    beforeEach(() => {
        const adminUserName = Cypress.env('adminUserName');
        const adminPassword = Cypress.env('adminPassword');
        
        login(adminUserName,adminPassword).then((response) => {
            expect(response.status).to.eq(200);
            authToken = response.body.idToken;
        });
    });

    it('should return a successful response', () => {
        getClients(authToken).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});