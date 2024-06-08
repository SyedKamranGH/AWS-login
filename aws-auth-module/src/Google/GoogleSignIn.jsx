import React, { useEffect, useState } from 'react'
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

const GoogleSignIn = () => {
    const [user, setUser] = useState(null);
    const [customState, setCustomState] = useState(null);

    // const isLocalhost = Boolean(
    //     window.location.hostname === 'localhost' ||
    //     // [::1] is the IPv6 localhost address.
    //     window.location.hostname === '[::1]' ||
    //     // 127.0.0.1/8 is considered localhost for IPv4.
    //     window.location.hostname.match(
    //         /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    //     )
    // );

    const getUser = () => {
        return Auth.currentAuthenticatedUser()
            .then(userData => userData)
            .catch(err => console.log('Not signed in - ', err));
    };

    useEffect(() => {
        // console.log('User -----> ', getUser());
        Hub.listen("auth", ({ payload: { event, data } }) => {
            switch (event) {
                case "signIn":
                    console.log('signIn --> ' + data)
                    getUser().then((userData) => { setUser(userData); })
                    break;
                case 'cognitoHostedUI':
                    getUser().then((userData) => { setUser(userData); })
                    break;
                case "signOut":
                    setUser(null);
                    break;
                case 'signIn_failure':
                    console.log('Sign in failure', data);
                    break;
                case 'cognitoHostedUI_failure':
                    console.log('cognitoHostedUI_failure', data);
                    break;
                case "customOAuthState":
                    console.log('customOAuthState', data);
                    setCustomState(data);
                    break;
                default:
                    console.log('Default case received ----> ', event);
            }
        });

        getUser().then(userData => setUser(userData));

    }, []);

    const handleGoogleSignIn = async () => {
        try {
            const user = await Auth.federatedSignIn({
                provider: 'Google'//CognitoHostedUIIdentityProvider.Google,
            });

            console.log('signInResponse ---->' + user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3>Google Login {user && user.getUsername()}</h3>
            <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
            {user ? (
                <button onClick={() => Auth.signOut()}>Sign Out</button>
            ) : (
                // <button onClick={() => Auth.federatedSignIn()}>Federated Sign In</button>
                <button onClick={() => handleGoogleSignIn()}>Google Login</button>
            )}
        </div>
    )

}

export default GoogleSignIn