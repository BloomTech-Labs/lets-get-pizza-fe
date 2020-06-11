import React from 'react';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { userEditSettings } from '../../../redux/actions/userActions';

import UserDisplayInfo from './UserDisplayInfo';

jest.mock('../../../redux/actions/userActions');
const mockStore = configureStore();

describe('UserEditActive with item.value as a string', () => {

    let store;
    let component;

    const newValue = "Los Angeles"

    beforeEach(() => {
        store = mockStore({
            user: {
                pendingUserChanges: { display_name: 'JDawg' },
                field: 'Display Name'
            }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <UserDisplayInfo />
            </Provider>
        )
    });

    it('should render with text from props', () => {
        // Grab all children objects of the component's main div
        const childProps = component.toJSON().children.map(child => child.children[0].props);
        // Find the component with the 'test id'
        const inputVal = childProps.filter(({ id }) => id === "display-name-input")[0].value
        // Test that the component is rendering the user's display_name given via the Redux store
        expect(inputVal).toBe('JDawg')
    })

    it('input onChange can fire userEditSettings for each option & fires correct Redux action', () => {
        renderer.act(() => {
            component.root.findByType('input').props.onChange({ target: { name: 'display_name' } }, { value: newValue })
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(userEditSettings({ target: { name: 'display_name' } }, newValue));
    })
})