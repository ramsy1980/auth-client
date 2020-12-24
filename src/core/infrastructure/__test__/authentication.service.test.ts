import { AuthenticationService } from '../authentication.service';
import { MockHttpClient } from '../../../test/mock-http-client';

describe('AuthenticationService', () => {
    it('succeeds', () => {
        const httpClient = new MockHttpClient({
            baseUrl: "http://test"
        });
        const service = new AuthenticationService({
            httpClient
        });

        expect(service.login).toBeDefined()
    })
})