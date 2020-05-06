import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import UserEditActive from './UserEditActive';
import UserEditInactive from './UserEditInactive';


export default function UserSettingsList({ item }) {
    const dispatch = useDispatch();
    const field = useSelector(({ user }) => user.field);

    return (
        <Grid columns={2} >
            {field === item.name ? (
                <UserEditActive item={item}
                // current={props.current} handleChange={props.handleChange} handleClick={props.handleClick} 
                />
            ) : (
                    <UserEditInactive item={item}
                    //  current={props.current} handleClick={props.handleClick} 
                    />
                )}
        </Grid>
    )
}