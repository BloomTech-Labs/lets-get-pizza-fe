import React from 'react';
import { List, Image } from 'semantic-ui-react';
import { curr_user } from "../../../utils/auth";
import API from "../../../utils/API";

export default function UserProfile() {
    console.log(curr_user)


    return (
        <List divided relaxed>
            <List.Item>
                <List.Content>
                    <Image src="http://place-puppy.com/100x100" />
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='user circle' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header >Display Name</List.Header>
                    <List.Description as='a'>{curr_user.display_name}</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='mail' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header >Email</List.Header>
                    <List.Description as='a'>{curr_user.email}</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='location arrow' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header >Location</List.Header>
                    <List.Description as='a'>{curr_user.display_location}</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='check circle' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header >Favorite Toppings</List.Header>
                    <List.Description as='a'>{curr_user.favorite_pizza_toppings}</List.Description>
                </List.Content>
            </List.Item>
            <List.Item>
                <List.Icon name='ban' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header >Dietary Preferences</List.Header>
                    <List.Description as='a'>{curr_user.dietary_preference}</List.Description>
                </List.Content>
            </List.Item>
        </List>
    )
} 