import axios from 'axios';
import { HttpClient } from "../../../../../core/data/protocols";

export class AxiosHttpClient extends HttpClient {

    axiosOptions = {
        baseURL: this.baseUrl,
        withCredentials: true
    }

    async post<P>(path: string, payload: HttpClient.Post): Promise<P> {
        return axios.post(
            path,
            payload.body,
            {
                headers: payload.headers,
                ...this.axiosOptions
            }
        )
    }

    async get<G>(path: string, payload?: HttpClient.Get): Promise<G> {
        return axios.get(
            path,
            {
                headers: payload?.headers,
                ...this.axiosOptions
            }
        )
    }

    async delete<D>(path: string, payload?: HttpClient.Delete): Promise<D> {
        return axios.delete(
            path,
            {
                headers: payload?.headers,
                ...this.axiosOptions
            }
        )
    }
}