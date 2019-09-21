import { createStore } from "redux"

import { persistReducer, persistStore } from "redux-persist"

// import storage from 'redux-persist/lib/storage'
// import AsyncStorage from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

import  rootReducer  from "../reducers"

import devToolsEnhancer from 'remote-redux-devtools';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, devToolsEnhancer())
export const persistor = persistStore(store)

export default store;