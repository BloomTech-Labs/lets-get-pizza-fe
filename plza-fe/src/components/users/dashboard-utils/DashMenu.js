import React from 'react';
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import icons from './icons';

const menuItems = [
    { name: 'Home', icon: icons.homeIcon, route: '/users/profile/home' },
    { name: 'My Friends', icon: icons.networkIcon, route: '/users/profile/friends' },
    { name: 'Events', icon: icons.eventsIcon, route: '/users/profile/events' },
    { name: 'Promotions', icon: icons.promotionsIcon, route: '/users/profile/promotions' },
    { name: 'Personal Reviews', icon: icons.reviewIcon, route: '/users/profile/reviews' },
    { name: 'Fav Pizza Shop', icon: icons.pizzaIcon, route: '/users/profile/favoriteShop' },
    { name: 'Profile', icon: icons.profileIcon, route: '/users/profile/profile' },
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