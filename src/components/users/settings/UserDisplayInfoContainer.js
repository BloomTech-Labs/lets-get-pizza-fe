import React from 'react';
import { useSelector } from 'react-redux';
import { List, } from 'semantic-ui-react';
import UserDisplayInfo from './UserDisplayInfo';
import DropzoneModal from '../dashboard-utils/DropzoneModal';

export default function UserDisplayInfoContainer() {
    const user = useSelector(({ user }) => user);

    return (
        <List.Item style={{ display: "flex" }}>
            <List.Content>
                <DropzoneModal />
            </List.Content>
            <List.Content style={{ marginLeft: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <List.Content>
                    <List.Header>Display Name</List.Header>
                    <List.Description>{user.pendingUserChanges.display_name}</List.Description>
                </List.Content>
                <UserDisplayInfo />
            </List.Content>
        </List.Item>
    )
}//