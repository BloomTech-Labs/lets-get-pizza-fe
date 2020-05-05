import React from 'react';
import { Button, Grid } from 'semantic-ui-react';


export default function UserEditButton(props) {

    return (
        <Grid.Column style={{ display: 'flex', alignItems: 'center' }}>
            <Button size='tiny' id={props.item.name} onClick={props.handleClick}>
                {props.text}
            </Button>
        </Grid.Column>
    )
}