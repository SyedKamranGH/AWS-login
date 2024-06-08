import React, { useState, useEffect, useContext } from 'react'
import { AccountContext } from '../Context/Account'
import ChangePassword from './ChangePassword';

const Settings = () => {

    const [loggedInUser, setLoggedInUser] = useState(false);
    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession().then(() => {
            setLoggedInUser(true);
        }).catch(err => console.error(err));
    }, [])

    return (
        <>
            {loggedInUser && <>
                <h4>Settings</h4>
                <ChangePassword />
            </>}
        </>
    )
}

export default Settings