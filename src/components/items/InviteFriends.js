import React, { useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import API from '../../utils/API'

const InviteFriends = ({ event_id, invites, setInvites }) => {
    const user_friends = useSelector(({ user }) => user.friends)
    const [options, setOptions] = useState([])


    useEffect(() => {
        let selections = user_friends.map(f => {
            return {
                key: f.friends_id, 
                text: f.friend_username, 
                value: f.friends_id
            }
        })
        API.get(`/events/${event_id}/invites`)
            .then(res => {
                const ids = res.data.map(invite => invite.invitee_user_id)
                return ids
            })
            .then(ids => {
                const filtered = selections.map(option => {
                    return ids.includes(option.key) ? {...option, disabled: true} : option
                })
                setOptions(filtered)
            })
            .catch(err => console.log(err))
    }, [event_id])

    const handleChange = (e, { value }) => {
        setInvites([...value])
    }

    return(
        <>
            <Dropdown
                placeholder='Invite Friends'
                fluid
                multiple
                search
                selection
                options={options}
                value={invites}
                onChange={handleChange}
                selectOnNavigation={false}
            />
        </>
    )
}

export default InviteFriends