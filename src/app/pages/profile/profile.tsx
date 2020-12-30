import React, { FunctionComponent } from "react";
import { AuthenticationService } from "../../../core/infrastructure";

interface ProfileProps {
    service: AuthenticationService;
}

export const Profile: FunctionComponent<ProfileProps> = (props) => {

    const { service } = props;

    const handleLogout = async () => {
        try { await service.logout(); }
        catch (err) { console.error(err) }
    }

    React.useEffect(() => {
        service.currentUser()
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h1>Logged in</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}