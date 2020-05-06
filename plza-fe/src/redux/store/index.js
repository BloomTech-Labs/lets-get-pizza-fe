import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

// Adding Redux Persistance
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createEncryptor from 'redux-persist-transform-encrypt' // library used to encrypt redux store

// Configure local storage encryptor 
const encryptor = createEncryptor({
    secretKey: `${process.env.REACT_APP_ENCRYPT_SECRET}`,
    onError: function(error){
        console.log(error)
    }
})

// Configure persistance to use local storage 
const persistConfig = {
    key: 'root',
    storage,
    transforms: [encryptor]
}

// Return persisted redux reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer, applyMiddleware(thunk))
export let persistor = persistStore(store)