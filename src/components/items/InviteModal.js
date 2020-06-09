import React, { useState } from 'react'
import { Modal, Button, Header, Label } from 'semantic-ui-react'
import InviteFriends from './InviteFriends'
import API from '../../utils/API'
import axios from 'axios'
import { useSelector } from 'react-redux'

const InviteModal = ({ event_id }) => {
    const [open, setOpen] = useState(false)
    const [invites, setInvites] = useState([])
    const user_id = useSelector(({ user }) => user.id)

    const handleSubmit = e => {
        // Here we will be using axios.all() to handle
        // our multiple invite requests
        // We first are mapping through the invites array
        // to create a new array of POST requests, 1 for each invite
        const postCalls = invites.map(invite => API.post(`/events/${event_id}/invite`, {
            event_id, 
            inviter_user_id: user_id,
            invitee_user_id: invite
        }))
        // Here we are deploying axios.all()
        // to simultaneously make make a post request
        // for each item in our postCalls array
        axios.all(postCalls)
            .then(res => {
                setInvites([])
                setOpen(false)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <Modal 
            open={open}
            closeIcon
            onClose={() => setOpen(false)}
            trigger={<Label as='a' icon='add user' content='Invite Friends' onClick={() => setOpen(true)}/>}
        >
            <Header icon='user add' content='Invite Friends'/>
            <Modal.Content>
                <InviteFriends event_id={event_id} invites={invites} setInvites={setInvites}/>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpen(false)}>
                    Cancel
                </Button>
                <Button color='blue' onClick={handleSubmit}>
                    Invite
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default InviteModal