import React from 'react';
import { List, Input } from 'semantic-ui-react';

import UserEditButton from './UserEditButton';

export default function UserDisplayInfo(props) {

    return (
        <>
            {props.current === 'Display Name' ? (
                <List.Content style={{ display: 'flex' }}>
                    <Input onChange={props.handleChange}
                        name='display_name'
                        value={props.user.display_name}
                    />
                    <UserEditButton text={'Save'}
                        item={{ name: 'Display Name', value: props.user.display_name }}
                        handleClick={props.handleClick}
                    />
                </List.Content>
            ) : (
                    <UserEditButton text={'Edit'}
                        item={{ name: 'Display Name', value: props.user.display_name }}
                        handleClick={props.handleClick}
                    />
                )}
        </>
    )
}