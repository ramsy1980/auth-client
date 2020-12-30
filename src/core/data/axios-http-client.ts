import axios from 'axios';
import { HttpClient } from "../../../../../core/data/protocols";

export class AxiosHttpClient extends HttpClient {

    axiosOptions = {
        baseURL: this.baseUrl,
        withCredentials: true
    }

    post<P>(path: string, payload: HttpClient.Post): Promise<P> {
        return axios.post(
            path,
            payload.body,
            {
                headers: payload.headers,
                ...this.axiosOptions
            }
        )
    }

    get<P>(path: string, payload?: HttpClient.Get): Promise<P> {
        return axios.get(
            path,
            {
                headers: payload?.headers,
                ...this.axiosOptions
            }
        )
    }

    delete<P>(path: string, payload?: HttpClient.Delete): Promise<P> {
        return axios.delete(
            path,
            {
                headers: payload?.headers,
                ...this.axiosOptions
            }
        )
    }
}