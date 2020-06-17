import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './userActions'
import * as types from '../types/userTypes'
import fetchMock from 'fetch-mock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe("test userActions init", () => {
    afterEach(() => {
        fetchMock.restore()
      })
    
    it("init passes", () => {
        expect(1).toBe(1);
    })

    it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
        fetchMock.getOnce('/todos', {
          body: { todos: ['do something'] },
          headers: { 'content-type': 'application/json' }
        })
    
        const expectedActions = [
          { type: types.USER_LOGIN_START },
          { type: types.USER_LOGIN_SUCCESS, body: { todos: ['do something'] } }
        ]
        const store = mockStore({ todos: [] })
    
        // return store.dispatch(actions.fetchTodos()).then(() => {
        //   // return of async actions
        //   expect(store.getActions()).toEqual(expectedActions)
        // })
      })
})