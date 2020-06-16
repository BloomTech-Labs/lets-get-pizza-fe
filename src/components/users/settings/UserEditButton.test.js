import React from 'react';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { userToggleEdit } from '../../../redux/actions/userActions';

import UserEditButton from './UserEditButton';

jest.mock('../../../redux/actions/userActions');
const mockStore = configureStore({});

describe('UserEditButton', () => {
    let store;
    let component;
    const item = {
        name: 'itemName'
    };
    const text = 'textValue';
    const event = { target: { id: 'itemName' } };

    beforeEach(() => {
        store = mockStore({
            user: { field: 'currentItem' }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <UserEditButton item={item} text={text} />
            </Provider>
        );
    });

    it('should render with text from props', () => {
        const values = component.root.findByType('button').props;

        expect(values.id).toBe(item.name);
        expect(values.children).toContain(text);
    })

    it('should dispatch userToggleEdit action on button click', () => {
        renderer.act(() => {
            component.root.findByType('button').props.onClick();
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(userToggleEdit(event, item.name));
    });
});