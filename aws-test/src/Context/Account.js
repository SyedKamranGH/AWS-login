import React, { createContext } from 'react'
import { Auth } from 'aws-amplify';

const AccountContext = createContext();


const Account = (props) => {

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            Auth.currentAuthenticatedUser().then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            })

        })
    }
    const authenticate = async (username, password) => {

        return await new Promise((resolve, reject) => {
            Auth.signIn(username, password).then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            })

        })
    };

    const changePassword = async (username, password) => {
        return await new Promise((resolve, reject) => {
        })
    };
    return (
        <AccountContext.Provider value={{ authenticate, getSession }}>{props.children}</AccountContext.Provider>
    )
}

export { Account, AccountContext }