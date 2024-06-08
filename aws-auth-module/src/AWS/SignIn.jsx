import { Auth } from 'aws-amplify';
import React, { useState, useContext } from 'react'
import { AccountContext } from '../Context/Account';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { authenticate } = useContext(AccountContext);

    const handleSignIn = async (e) => {
        e.preventDefault();
        authenticate(email, password).then((data) => {
            console.log('Log in user', data);
        }).catch((err) => {
            console.log('Failed to login ', err);
        });
    }

    return (
        <div>
            <h3>AWS Login</h3>
            <form onSubmit={handleSignIn}>
                <div>
                    <label htmalFor="email">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmalFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default SignIn