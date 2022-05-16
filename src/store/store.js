/* 
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer'


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
) */

import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer
    }
})