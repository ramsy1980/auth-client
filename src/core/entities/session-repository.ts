import { User } from "./user";

export interface UserRepository {
    registerUser(): Promise<User>
    loginUser(): Promise<User>
    logoutUser(): Promise<null>
}