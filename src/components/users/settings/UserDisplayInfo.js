import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Input } from 'semantic-ui-react';
import { userEditSettings } from '../../../redux/actions/userActions';
import UserEditButton from './UserEditButton';

export default function UserDisplayInfo() {
    const dispatch = useDispatch();
    const user = useSelector(({ user }) => user);

    const handleChange = (event, { value }) => {
        dispatch(userEditSettings(event, value))
    }

    return (
        <>
            {user.field === 'Display Name' ? (
                <List.Content style={{ display: 'flex' }}>
                    <Input
                        id='display-name-input'
                        onChange={handleChange}
                        name='display_name'
                        value={user.pendingUserChanges.display_name}
                    />
                    <UserEditButton text={'Save'} item={{ name: 'Display Name', value: user.pendingUserChanges.display_name }} />
                </List.Content>
            ) : (
                    <UserEditButton text={'Edit'} item={{ name: 'Display Name', value: user.pendingUserChanges.display_name }} />
                )}
        </>
    )
}