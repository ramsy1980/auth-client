import { FunctionComponent } from "react";
import { useHistory, Redirect } from "react-router-dom";
import useSWR from 'swr'
import { useAuth } from "../../hooks";

interface ProfileProps { }

export const Profile: FunctionComponent<ProfileProps> = () => {

    const history = useHistory();
    const { auth } = useAuth();

    const fetcher = () => auth.currentUser().then((res) => res.data)

    const { data, error } = useSWR('/api/user/currentUser', fetcher)

    const handleLogout = async () => {
        try {
            await auth.logout();
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