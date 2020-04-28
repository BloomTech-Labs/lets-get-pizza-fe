import React, { useState } from 'react';
import { List, Image, Button, Icon, Input } from 'semantic-ui-react';
import { curr_user } from "../../../utils/auth";
import UserSettingsList from './UserSettingsList';
import API from "../../../utils/API";



export default function UserSettings() {
    const [current, setCurrent] = useState('')
    const [user, setUser] = useState({ ...curr_user });
    const listItems = [
        { name: 'Email', icon: 'mail', value: user.email },
        { name: 'Location', icon: 'location arrow', value: user.display_location },
        { name: 'Favorite Toppings', icon: 'mail', value: user.favorite_pizza_toppings },
        { name: 'Dietary Preferences', icon: 'ban', value: user.dietary_preference },
    ]

    const handleClick = e => {
        console.log(e.target)
        setCurrent(e.target.id)
        console.log(current)
    }

    const handleChange = e => {
        console.log(e.target.name)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        setCurrent('')
    }


    return (
        <List divided relaxed='very'>


            {/* Top section with user avatar image & display name */}
            <List.Item style={{ display: "flex" }}>
                <List.Content>
                    <Image avatar size={'tiny'} src="http://place-puppy.com/1000x1000" />
                </List.Content>
                <List.Content style={{ marginLeft: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <List.Content>
                        <List.Header>Display Name</List.Header>
                        <List.Description>{user.display_name}</List.Description>
                    </List.Content>
                    {current === 'display_name' ? (
                        <List.Content>
                            <Input onChange={handleChange} name='display_name' value={user.display_name}></Input>
                            <Button animated='fade' size={'tiny'} onClick={handleClick}>
                                <Button.Content hidden>Save</Button.Content>
                                <Button.Content visible>
                                    <Icon name='save' />
                                </Button.Content>
                            </Button>
                        </List.Content>
                    ) : (
                            <Button animated='fade' size={'tiny'} onClick={handleClick}>
                                <Button.Content hidden>Edit</Button.Content>
                                <Button.Content visible icon="edit">
                                    <Icon id={'display_name'} name='edit' />
                                </Button.Content>
                            </Button>
                        )}
                </List.Content>
            </List.Item>

            {listItems.map(item => <UserSettingsList current={current} user={user} handleChange={handleChange} item={item} handleClick={handleClick} />
            )}
        </List>
    )
} 