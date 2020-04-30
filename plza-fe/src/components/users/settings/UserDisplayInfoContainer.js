import React from 'react';
import { List, } from 'semantic-ui-react';
import UserDisplayInfo from './UserDisplayInfo';
import DropzoneModal from '../dashboard-utils/DropzoneModal';

export default function UserDisplayInfoContainer(props) {

    return (
        <List.Item style={{ display: "flex" }}>
            <List.Content>
                <DropzoneModal />
            </List.Content>
            <List.Content style={{ marginLeft: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <List.Content>
                    <List.Header>Display Name</List.Header>
                    <List.Description>{props.user.display_name}</List.Description>
                </List.Content>
                <UserDisplayInfo user={props.user} handleChange={props.handleChange} handleClick={props.handleClick} />
            </List.Content>
        </List.Item>
    )
}