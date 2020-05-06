import React, { useState } from 'react';
import { List, Button } from 'semantic-ui-react';

import UserSettingsList from './UserSettingsList';
import UserDisplayInfoContainer from './UserDisplayInfoContainer';


export default function UserSettings(props) {

    return (
        <>
            <List divided relaxed='very'>
                {/* Top section with user avatar image & display name */}
                <UserDisplayInfoContainer user={props.user} handleChange={props.handleChange} handleClick={props.handleClick} current={props.current} />

                {/* Map through user settings array & render rows */}
                {props.listItems.map(item => <UserSettingsList current={props.current}
                    key={item.name}
                    user={props.user}
                    handleChange={props.handleChange}
                    item={item}
                    handleClick={props.handleClick}
                />
                )}
            </List>
            <Button.Group onClick={props.saveAllChanges} style={{ margin: '1.5rem auto auto 1rem' }}>
                <Button color='black'>UNDO</Button>
                <Button id="save" positive
                    icon='checkmark'
                    labelPosition='right'
                    content='SUBMIT CHANGES' />
            </Button.Group>
        </>
    )
} 