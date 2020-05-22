import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// Adding Redux Persistance
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createEncryptor from 'redux-persist-transform-encrypt' // library used to encrypt redux store
import { createFilter, createBlacklistFilter } from 'redux-persist-transform-filter'

// Configure local storage encryptor 
const encryptor = createEncryptor({
    secretKey: `${process.env.REACT_APP_ENCRYPT_SECRET}`,
    onError: function(error){
        console.log(error)
    }
})

// Create function which will `blacklist`(exclude) chosen state from being persisted 
const reducerBlackList = (reducer, state) => { 
    return createBlacklistFilter(
    reducer,
    [...state]
    )
}

// Configure persistance to use local storage 
const persistConfig = {
    key: 'root',
    storage,
    transforms: [
        reducerBlackList('user', ['error', 'isLoading']),
        reducerBlackList('location', ['error', 'isLoading']),
        reducerBlackList('friend', ['error', 'isLoading']),
        encryptor
    ]
}

// Return persisted redux reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer, applyMiddleware(thunk))
export let persistor = persistStore(store)