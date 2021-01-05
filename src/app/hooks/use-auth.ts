import { AxiosHttpClient } from "../../core/data";
import { AuthenticationService } from "../../core/infrastructure";

export const useAuth = () => {
    const client = new AxiosHttpClient("http://localhost:3000");
    const auth = new AuthenticationService(client);

    return {
        auth
    }
}