import { HttpClient } from "../../../../core/data/protocols";

export class MockHttpClient extends HttpClient {

    constructor(props: HttpClient.ConstructorProps) {
        super(props);

        this.baseUrl = "http://test:3000"
    }

    post(path: string, payload: HttpClient.Post): Promise<any> {
        return new Promise((resolve, reject) => {
            process.nextTick(() =>
              path === '/post/success'
                ? resolve(payload)
                : reject({
                    error: 'Error',
                  }),
            );
          });
    }

    delete(path: string, _: HttpClient.Delete): Promise<any> {
        return new Promise((resolve, reject) => {
            process.nextTick(() =>
              path === '/delete/success'
                ? resolve(undefined)
                : reject({
                    error: 'Error',
                  }),
            );
          });
    }

}