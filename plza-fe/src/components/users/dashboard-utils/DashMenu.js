import React from 'react';
import { Menu } from "semantic-ui-react";
import icons from './icons';

const menuItems = [
    { name: 'Home', icon: icons.homeIcon },
    { name: 'My Friends', icon: icons.networkIcon },
    { name: 'Events', icon: icons.eventsIcon },
    { name: 'Promotions', icon: icons.promotionsIcon },
    { name: 'Fav Pizza Shop', icon: icons.pizzaIcon },
    { name: 'Personal Reviews', icon: icons.contactIcon },
    { name: 'Profile', icon: icons.profileIcon },
]

export default function DashMenu(props) {
    const flex = { display: "flex", alignItems: 'center' };
    return (
        <Menu size='large' fluid='true' pointing tabular vertical >
            {
                menuItems.map(item => {
                    return (
                        <Menu.Item name={item.name}
                            active={props.active === item.name}
                            onClick={props.selectComponent}
                            style={flex}>
                            <img src={item.icon} style={{ marginRight: '2%' }} />
                            <p>{item.name}</p>
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )
}