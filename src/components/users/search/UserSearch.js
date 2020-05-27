import React, { useState, useEffect } from 'react'
import SimpleContainer from '../../main/SimpleContainer'
import { Input, Header, Card, Grid } from 'semantic-ui-react'
import API from '../../../utils/API'
import SearchCard from './SearchCard'
import { useSelector } from 'react-redux'

const UserSearch = () => {
    const [query, setQuery] = useState('')
    const [users, setUsers] = useState([])
    const curr_user = useSelector(({ user }) => user.username)

    useEffect(() => {
        API.get(`/users?username=${query}`)
            .then(res => {
                const filtered = res.data.users.filter(keep => keep.username !== curr_user)
                setUsers(filtered)
            })
            .catch(err => console.log(err))
    }, [query])

    return (
        <SimpleContainer icon='search' title='Search for friends...'>
            <Grid>
                <Grid.Column textAlign='center'>
                    <Input 
                        icon='search' 
                        placeholder='Enter username' 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </Grid.Column>
            </Grid>

            <Card.Group itemsPerRow={4} doubling stackable>
                {users.map(user => (
                    <SearchCard key={user.id} search={user} />
                ))}
            </Card.Group>
        </SimpleContainer>
    )
}

export default UserSearch