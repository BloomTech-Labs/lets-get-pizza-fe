import React from 'react';
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import icons from './icons';

const menuItems = [
    { name: 'Home', icon: icons.homeIcon, route: '/users/dash/home', routeName: 'home' },
    { name: 'My Friends', icon: icons.networkIcon, route: '/users/dash/friends', routeName: 'friends' },
    { name: 'Events', icon: icons.eventsIcon, route: '/users/dash/events', routeName: 'events' },
    { name: 'Promotions', icon: icons.promotionsIcon, route: '/users/dash/promotions', routeName: 'promotions' },
    { name: 'Personal Reviews', icon: icons.reviewIcon, route: '/users/dash/reviews', routeName: 'reviews' },
    { name: 'Fav Pizza Shop', icon: icons.pizzaIcon, route: '/users/dash/favoriteShop', routeName: 'favoriteShop' },
    { name: 'Profile', icon: icons.profileIcon, route: '/users/dash/profile', routeName: 'profile' },
]

export default function DashMenu(props) {
    const flex = { display: "flex", alignItems: 'center' };
    return (
        <Menu size='large' fluid='true' pointing tabular vertical >
            {
                menuItems.map(item => {
                    return (
                        <Menu.Item name={item.name}
                            key={item.routeName}
                            active={props.active === item.routeName}
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