import axios from 'axios';
import { HttpClient } from "../../../../../core/data/protocols";

export class AxiosHttpClient extends HttpClient {

    post<P>(path: string, payload: HttpClient.Post): Promise<P> {
        const { body, headers } = payload;

        return axios.post(
            path,
            body,
            {
                headers,
                baseURL: this.baseUrl,
                withCredentials: true
            }
        )
    }
}