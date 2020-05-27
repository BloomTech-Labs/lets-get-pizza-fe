import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { userEditSettings } from '../../../redux/actions/userActions';

import UserEditActive from './UserEditActive';

jest.mock('../../../redux/actions/userActions');
const mockStore = configureStore();


describe('UserEditActive with item.value as a string', () => {

    let store;
    let component;
    const item = {
        icon: "location arrow",
        name: "location",
        value: "Barcelona"
    };
    const newValue = "Los Angeles"
    beforeEach(() => {
        store = mockStore({
            user: { field: 'location' }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <UserEditActive item={item} />
            </Provider>
        )

    });

    it('should render with text from props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })

    it('input onChange can fire userEditSettings for each option & fires correct Redux action', () => {
        renderer.act(() => {
            component.root.findByType('input').props.onChange({ target: { name: item.name } }, { value: newValue })
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(userEditSettings({ target: { name: item.name } }, newValue));
    })

})

describe('UserEditActive with item.value as an array', () => {

    let store;
    let component;
    const item = {
        icon: "ban"
    };

    beforeEach(() => {
        store = mockStore({
            user: { field: 'dietary_preference' }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <UserEditActive item={item} />
            </Provider>
        )
    });

    it('should render with text from props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })

    it('Dropdown onChange can fire userEditSettings for each option & fires correct Redux action', () => {
        const options = [
            { text: "Vegan", value: "vegan" },
            { text: "Gluten-Free", value: "gluten-free" },
            { text: "Lacto-vegetarian", value: "lacto-vegetarian" },
            { text: "Ovo-vegetarian", value: "ovo-vegetarian" },
            { text: "Pescetarian", value: "pescetarian" },
            { text: "Vegetarian", value: "vegetarian" },
            { text: "None", value: "" },
        ]
        renderer.act(() => {
            options.forEach(({ text, value }) => {
                component.root.findAllByType('div')[2].props.onChange({ target: { text: text } }, { value })
            })
        });

        expect(store.dispatch).toHaveBeenCalledTimes(options.length);
        expect(store.dispatch).toHaveBeenCalledWith(userEditSettings({ target: { text: 'Vegan' } }, 'vegan'));
    })
})