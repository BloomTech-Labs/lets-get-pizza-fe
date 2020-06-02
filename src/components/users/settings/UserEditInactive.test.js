import React from 'react';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { findElementById } from '../../../utils/reduxTestingFunctions';
import UserEditInactive from './UserEditInactive';

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

    it('should render title/header with text from props', () => {

        const element = findElementById(component, 'inactive-list');
        const elHeader = element.children.filter(({ props }) => props.className === 'header')[0];

        expect(elHeader.children).toContain(item.title);
    })

    it('contains the proper title & value', () => {
        const element = findElementById(component, 'inactive-list');
        const elItem = element.children.filter(({ props }) => props.className === 'description');

        elItem.forEach(objItem => expect(objItem.children).toContain(item.value))
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

    it('should render title/header with text from props', () => {

        const element = findElementById(component, 'inactive-list');
        const elHeader = element.children.filter(({ props }) => props.className === 'header')[0];

        expect(elHeader.children).toContain(item.title);
    })

    it('should render items with text from props', () => {

        const element = findElementById(component, 'inactive-list');
        const elArrItems = element.children.filter(({ props }) => props.className === 'description');

        elArrItems.forEach(({ children }, index) => {
            expect(children).toContain(item.value[index])
        })
    })
})