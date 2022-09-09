import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {  persistStore,
    persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import categoriesReducer  from './categoriesReducer'
import profileReducer from "./profileReducer"
import weaponReducer from "./weaponReducer"
import cartReducer from "./cartReducer"



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}


const rootReducer = combineReducers({
    categories: categoriesReducer,
    profile: profileReducer,
    weapon: weaponReducer,
    cart : cartReducer
})



const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: null
    }),
    
})

export let persistor = persistStore(store)
export default store