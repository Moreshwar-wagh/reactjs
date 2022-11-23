import { useAuth0 } from "@auth0/auth0-react";

function LoginLogout() {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <>
            {
                isAuthenticated && <p>Welcome User: {user.name}</p>
            }

            {
                isAuthenticated ? (<li>
                    <button className='btn btn-warning m-2' onClick={() => logout({ returnTo: window.location.origin })}>
                        Log Out
                    </button>
                </li>) : (
                    <li>
                        <button className='btn btn-success m-2' onClick={() => loginWithRedirect()}>Log In</button>
                    </li>
                )
            }
            {
                isAuthenticated && <span>
                    <button className='btn btn-primary m-2'>Create Post</button>
                    <button className='btn btn-primary m-2'>Delete Post</button>
                    <button className='btn btn-primary m-2'>Update Post</button>
                </span>
            }<hr />
        </>
    );
}

export default LoginLogout