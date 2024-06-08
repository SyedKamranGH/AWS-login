import { Auth } from 'aws-amplify';
import React, { useState } from 'react'

const ChangePassword = () => {

    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    // const { authenticate } = useContext(AccountContext);

    const handleChangePassword = async (e) => {
        e.preventDefault();

        try {

            const user = await Auth.currentAuthenticatedUser();
            const data = await Auth.changePassword(user, password, newPassword);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleChangePassword}>
                <div>
                    <label htmalFor="password">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmalFor="email">New Password</label>
                    <input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    ></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default ChangePassword