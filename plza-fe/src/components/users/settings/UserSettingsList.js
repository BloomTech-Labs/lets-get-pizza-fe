import React from 'react';
import { Grid } from 'semantic-ui-react';
import UserEditButton from './UserEditButton';
import UserEditActive from './UserEditActive';
import UserEditInactive from './UserEditInactive';


export default function UserSettingsList(props) {
    return (
        <Grid columns={2} >
            {props.current === props.item.name ? (
                <UserEditActive item={props.item} current={props.current} handleChange={props.handleChange} handleClick={props.handleClick} />
            ) : (
                    <UserEditInactive item={props.item} current={props.current} handleClick={props.handleClick} />
                )}
        </Grid>
    )
}