// authApi.spec.ts

import { login } from '../../../support/Auth/auth';

describe('Authentication API Tests - HealthCheck', () => {
  it('should return a successful response', () => {
    const adminUserName = Cypress.env('adminUserName');
    const adminPassword = Cypress.env('adminPassword');
    
    login(adminUserName,adminPassword).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});