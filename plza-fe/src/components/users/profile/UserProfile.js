import React from 'react';
import { List } from 'semantic-ui-react';
import { curr_user } from "../../../utils/auth";
import API from "../../../utils/API";

export default function UserProfile() {
    console.log(curr_user)


    return (
        <List divided relaxed>
            <List.Item>
                <List.Icon name='user circle' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header >Username</List.Header>
                    <List.Description as='a'>{curr_user.display_name}</List.Description>
                </List.Content>
            </List.Item>
        </List>
    )
} 