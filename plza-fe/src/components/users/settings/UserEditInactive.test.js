import React from 'react';
import renderer from 'react-test-renderer';
import { screen } from '@testing-library/dom'

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { userToggleEdit } from '../../../redux/actions/userActions';

import UserEditInactive from './UserEditInactive';

jest.mock('../../../redux/actions/userActions');
const mockStore = configureStore({});

const storeObj = {
    user: { field: 'currentItem' }
}

describe('UserEditInactive with item.value as a string', () => {
    let store;
    let component;
    const item = {
        icon: "location arrow",
        title: "Location",
        value: "New York City"
    };
    beforeEach(() => {
        store = mockStore(storeObj);

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <UserEditInactive item={item} />
            </Provider>
        )

    });

    it('should render with text from props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })

    it('contains the proper title & value', () => {

    })
})

describe('UserEditInactive with item.value as an array', () => {
    let store;
    let component;
    const item = {
        icon: "ban",
        title: "Dietary Preferences",
        value: ["Gluten-free", "Vegan", "Veggitarian"]
    };

    beforeEach(() => {
        store = mockStore(storeObj);

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <UserEditInactive item={item} />
            </Provider>
        )
    });

    it('should render with text from props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    })
})