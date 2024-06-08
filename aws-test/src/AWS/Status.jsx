import React, { useEffect, useState, useContext } from 'react'
import { Auth } from 'aws-amplify';
import { AccountContext } from '../Context/Account';

import Pool from "./Cognito/UserPool";
// import { signIn } from "aws-amplify/auth";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const Status = () => {

    const [status, setStatus] = useState(false);
    const { getSession } = useContext(AccountContext);

    const getSessions = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve(session);
                    }
                });
            } else {
                reject();
            }
        });
    };

    const handleLogout = async () => {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        getSession().then((session) => {
            console.log('Status -- getSession', session)
            setStatus(true);
        }).catch((error) => {
            console.log(error);
        })

        getSessions().then((session) => {
            console.log('Status -- getSessions Cognito', session)
            setStatus(true);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    return (
        <div>
            {
                status ? (<>
                    <h4>You are logged In</h4>
                    <button onClick={handleLogout}>Logout</button>
                </>
                ) : (
                    <h4> You are logged out </h4>
                )
            }
        </div>
    )
}

export default Status