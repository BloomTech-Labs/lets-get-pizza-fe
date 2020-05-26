import React from 'react';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import UserEditActive from './UserEditActive';

jest.mock('../../../redux/actions/userActions');
const mockStore = configureStore({});

describe('UserEditActive with item.value as a string', () => {
    let store;
    let component;
    const item = {
        icon: "location arrow",
        name: "location",
        value: "Barcelona"
    };
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

    it('contains the proper title & value', () => {

    })
})

describe('UserEditActive with item.value as an array', () => {
    let store;
    let component;
    const item = {
        icon: "ban",
        name: "dietary_preference",
        value: ["vegan", "gluten-free"]
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
})