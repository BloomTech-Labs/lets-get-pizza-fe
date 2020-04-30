import React from 'react';
import { List, Image, Input } from 'semantic-ui-react';
import UserEditButton from './UserEditButton';
import DropzoneModal from '../dashboard-utils/DropzoneModal';

export default function UserDisplayInfo(props) {

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
                {props.current === 'Display Name' ? (
                    <List.Content style={{ display: 'flex' }}>
                        <Input onChange={props.handleChange}
                            name='display_name'
                            value={props.user.display_name}
                        />
                        <UserEditButton text={'Save'}
                            item={{ name: 'Display Name', value: props.user.display_name }}
                            handleClick={props.handleSubmit}
                        />
                    </List.Content>
                ) : (
                        <UserEditButton text={'Edit'}
                            item={{ name: 'Display Name', value: props.user.display_name }}
                            handleClick={props.handleClick}
                        />
                    )}
            </List.Content>
        </List.Item>
    )
}