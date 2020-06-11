import React, { useState, useEffect } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import API from '../../utils/API'

const InviteFriends = ({ event_id, invites, setInvites }) => {
    const user_friends = useSelector(({ user }) => user.friends)
    const [options, setOptions] = useState([])


    useEffect(() => {
        // Map through user's friends array to create
        // our array for dropdown selections
        let selections = user_friends.map(f => {
            return {
                key: f.friends_id, 
                text: f.friend_username, 
                value: f.friends_id
            }
        })

        // Fetch list of people invited to the event
        API.get(`/events/${event_id}/invites`)
            .then(res => {
                // mapping over response array to create 
                // new array of just invitee ids
                const ids = res.data.map(invite => invite.invitee_user_id)
                return ids
            })
            .then(ids => {
                // Mapping through array of selections
                // if a user has already been invited
                // to the event, we add `disabled: true`
                const mapped = selections.map(option => {
                    return ids.includes(option.key) ? {...option, disabled: true} : option
                })
                setOptions(mapped)
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