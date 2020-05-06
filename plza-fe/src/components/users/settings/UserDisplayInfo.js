import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Input } from 'semantic-ui-react';
import { userEditSettings } from '../../../redux/actions/userActions';
import UserEditButton from './UserEditButton';

export default function UserDisplayInfo() {
    const dispatch = useDispatch();
    const user = useSelector(({ user }) => user);

    return (
        <>
            {user.field === 'Display Name' ? (
                <List.Content style={{ display: 'flex' }}>
                    <Input
                        onChange={(event) => dispatch(userEditSettings(event))}
                        name='display_name'
                        value={user.display_name}
                    />
                    <UserEditButton text={'Save'}
                        item={{ name: 'Display Name', value: user.display_name }}
                    // handleClick={handleClick}
                    />
                </List.Content>
            ) : (
                    <UserEditButton text={'Edit'}
                        item={{ name: 'Display Name', value: user.display_name }}
                    // handleClick={handleClick}
                    />
                )}
        </>
    )
}