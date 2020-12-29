import axios from 'axios';
import { AxiosHttpClient } from '../axios-http-client';

jest.mock('axios');

describe('AxiosHttpClient', () => {
    let BASE_URL = "http://www.test.url"
    let client: AxiosHttpClient;

    beforeEach(() => {
        jest.resetAllMocks();
        client = new AxiosHttpClient(BASE_URL);
    })

    it('handles POST', async () => {

        (axios.post as jest.Mock).mockImplementationOnce(() => Promise.resolve({}));

        await client.post('/test-path', {
            body: {
                foo: 'bar'
            },
            headers: {
                TEST: true
            }
        })

        expect(axios.post).toHaveBeenCalledWith(
            "/test-path",
            { foo: "bar" },
            {
                baseURL: "http://www.test.url",
                headers: { TEST: true },
                withCredentials: true
            }
        )
    })


})