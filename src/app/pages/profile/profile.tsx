import { FunctionComponent } from "react";
import { useHistory, Redirect } from "react-router-dom";
import useSWR from 'swr'
import { AuthenticationService } from "../../../core/infrastructure";

interface ProfileProps {
    service: AuthenticationService
}

export const Profile: FunctionComponent<ProfileProps> = (props) => {

    const { service } = props;

    const history = useHistory();

    const fetcher = () => service.currentUser().then((res: any) => res.data)

    const { data, error } = useSWR('/api/user/currentUser', fetcher)

    const handleLogout = async () => {
        try {
            await service.logout();
            history.push('/login');
        }
        catch (err) {
            console.error(err)
        }
    }

    if (error) return <Redirect to="/login" />
    if (!data) return <div>loading...</div>

    return (
        <div>
            <h1>Logged in</h1>
            <small>
                <pre>
                    <code>
                        {JSON.stringify(data, undefined, 2)}
                    </code>
                </pre>
            </small>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}