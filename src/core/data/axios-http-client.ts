import axios from 'axios';
import { HttpClient } from "../../../../../core/data/protocols";

export class AxiosHttpClient extends HttpClient {

    axiosOptions = {
        baseURL: this.baseUrl,
        withCredentials: true
    }

    async post<P>(path: string, payload: HttpClient.Post): Promise<HttpClient.DataError<P>> {
        return axios.post(
            path,
            payload.body,
            {
                headers: payload.headers,
                ...this.axiosOptions
            }
        )
    }

    async get<G>(path: string, payload?: HttpClient.Get): Promise<HttpClient.DataError<G>> {
        return axios.get(
            path,
            {
                headers: payload?.headers,
                ...this.axiosOptions
            }
        )
    }

    async delete<D>(path: string, payload?: HttpClient.Delete): Promise<HttpClient.DataError<D>> {
        return axios.delete(
            path,
            {
                headers: payload?.headers,
                ...this.axiosOptions
            }
        )
    }
}