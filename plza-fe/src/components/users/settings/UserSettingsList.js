import React from 'react';
import { List, Button, Icon, Input, Item } from 'semantic-ui-react';


export default function UserSettingsList(props) {

    return (
        <List.Item>
            <List.Icon name={props.item.icon} size='large' verticalAlign='middle' />
            <List.Content>
                {props.current === props.item.name ? (
                    <List.Content>
                        <Input onChange={props.handleChange} name={props.item.name} value={props.item.value}></Input>
                        <Button animated='fade' size={'tiny'} onClick={props.handleClick}>
                            <Button.Content hidden>Save</Button.Content>
                            <Button.Content visible>
                                <Icon name='save' />
                            </Button.Content>
                        </Button>
                    </List.Content>
                ) : (
                        <div style={{ display: 'flex' }}>
                            <div>
                                <List.Header >{props.item.name}</List.Header>
                                <List.Description>{props.user.email}</List.Description>
                            </div>
                            <Button style={{ marginLeft: "1rem" }} animated='fade' size={'tiny'} onClick={props.handleClick}>
                                <Button.Content hidden>Edit</Button.Content>
                                <Button.Content visible icon="edit">
                                    <Icon id={props.item.name} name='edit' />
                                </Button.Content>
                            </Button>
                        </div>
                    )}
            </List.Content>
        </List.Item>
    )
}