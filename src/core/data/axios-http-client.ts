import axios from 'axios';
import { HttpClient } from "../../../../../core/data/protocols";

export class AxiosHttpClient extends HttpClient {

    constructor(props: HttpClient.ConstructorProps) {
        super(props);

        this.baseUrl = "http://localhost:3000"
    }

    post<P>(path: string, payload: HttpClient.Post): Promise<P> {
        return axios.post(
            this.baseUrl + path,
            payload,
            {
                headers: payload.headers
            }
        )
    }
    delete<D>(path: string, payload: HttpClient.Delete): Promise<D> {
        return axios.delete(
            this.baseUrl +  path,
            {
                headers: payload.headers
            }
        )
    }

}