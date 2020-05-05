import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// Adding Redux Persistance
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Configure persistance to use local storage 
const persistConfig = {
    key: 'root',
    storage,
}

// Return persisted redux reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer, applyMiddleware(thunk))
export let persistor = persistStore(store)