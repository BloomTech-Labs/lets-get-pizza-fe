import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid } from 'semantic-ui-react';
import { userToggleEdit } from '../../../redux/actions/userActions';

export default function UserEditButton(props) {
    const dispatch = useDispatch();
    const field = useSelector(({ user }) => user.field);

    return (
        <Grid.Column style={{ display: 'flex', alignItems: 'center' }}>
            <Button size='tiny' id={props.item.name} onClick={(event) => dispatch(userToggleEdit(event, field))}>
                {props.text}
            </Button>
        </Grid.Column>
    )
}