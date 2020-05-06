import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { curr_user } from '../../../utils/auth';
import API from "../../../utils/API";

import UserSettings from './UserSettings';


export default function UserSettingsContainer() {
    const [current, setCurrent] = useState('');
    // const [user, setUser] = useState({ ...curr_user });


    // toggle seletion
    // const handleClick = e => {
    //     if (e.target.id === current) {
    //         setCurrent('')
    //     } else {
    //         setCurrent(e.target.id)
    //     }
    // }
    // update user inputs
    // const handleChange = (e, { value }) => {
    //     !e.target.name ? (
    //         setUser({ ...user, dietary_preference: value })
    //     ) : (
    //             setUser({ ...user, [e.target.name]: value })
    //         )
    // }
    // submit all saved changes
    // const saveAllChanges = e => {
    //     if (e.target.id === 'save') {
    //         API.put(`/users`, user)
    //             .then(res => {
    //                 setUser({ ...user, ...res.data })
    //             })
    //             .catch(err => console.log("There was an error saving UserSettings", err.message))
    //     } else {
    //         setUser({ ...curr_user })
    //     }
    // }

    return (
        <UserSettings />
        // <UserSettings current={current}
        //     user={user}
        //     listItems={listItems}
        //     handleClick={handleClick}
        //     handleChange={handleChange}
        //     saveAllChanges={saveAllChanges} />
    )
}