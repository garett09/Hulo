import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer,userReducer,forgotPasswordReducer } from "./reducers/userReducers";


const reducer = combineReducers({
    auth: authReducer,
    user:userReducer,
    forgotPassword:forgotPasswordReducer

})


let initialState = {}

const middlware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))


export default store