import React from 'react';
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import icons from './icons';

const menuItems = [
    { name: 'Home', icon: icons.homeIcon, route: '/users/dash/home' },
    { name: 'My Friends', icon: icons.networkIcon, route: '/users/dash/friends' },
    { name: 'Events', icon: icons.eventsIcon, route: '/users/dash/events' },
    { name: 'Promotions', icon: icons.promotionsIcon, route: '/users/dash/promotions' },
    { name: 'Personal Reviews', icon: icons.reviewIcon, route: '/users/dash/reviews' },
    { name: 'Fav Pizza Shop', icon: icons.pizzaIcon, route: '/users/dash/favoriteShop' },
    { name: 'Profile', icon: icons.profileIcon, route: '/users/dash/profile' },
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
                            style={flex}
                            as={Link} to={item.route}>
                            <img src={item.icon} style={{ marginRight: '2%' }} />
                            <p>{item.name}</p>
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )
}