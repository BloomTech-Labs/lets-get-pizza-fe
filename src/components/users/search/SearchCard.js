import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { addUserFriend, deleteUserFriends } from '../../../redux/actions/userActions'

const SearchCard = ({ search }) => {
    const dispatch = useDispatch()
    const [friends, curr_user] = useSelector(({ user }) => [user.friends, user])
    // Use find method on current user's friends array 
    // if matched by username will return user, else undefined
    const added = friends.find(friend => search.username === friend.friend_username)

    const handleClick = e => {
        e.preventDefault()

        // If already a friend dispatch action to remove friend
        // If not friend, dispatch action to add friend
        added ? 
        dispatch(deleteUserFriends(added.id, curr_user)) :
        dispatch(addUserFriend(curr_user, search.id))
    }
    return (
        <Card href={`/users/${search.username}`}>
            <Card.Content>
                <Image 
                    src={search.profile_image}
                    size='massive'
                    avatar
                    inline
                    floated='left'
                />
                <Card.Header textAlign='right'>{search.username}</Card.Header>
                <Card.Meta textAlign='right'>{search.display_location}</Card.Meta>
                <Card.Description textAlign='center'>{search.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra textAlign='center'>
                <Button onClick={handleClick} color='blue' disabled={added ? true : false}>
                    {added ? 'Added!!' : 'Add'}
                </Button>
            </Card.Content>
        </Card>
    )
}

export default SearchCard