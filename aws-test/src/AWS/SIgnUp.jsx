import React, { useState } from 'react'
import { Auth } from 'aws-amplify';

const SIgnUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // AWS Cognito integration using Amplify
        try {
            const siginUpResponse = await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    email: email
                }
            });

            console.log('siginUpResponse ----> ' + siginUpResponse);
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <div>
            <h3>Aws Signup or Registration</h3>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SIgnUp