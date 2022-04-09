import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer,userReducer,forgotPasswordReducer, allUsersReducer } from "./reducers/userReducers";
import { getVillaReducer, getVillasReducer } from "./reducers/villaReducer";
import { newFormReducer, myFormReducer, formDetailsReducer, allFormsReducer, formReducer } from "./reducers/formReducers";


const reducer = combineReducers({
    auth: authReducer,
    user:userReducer,
    allUsers: allUsersReducer,
    forgotPassword:forgotPasswordReducer,
    newForm: newFormReducer,
    myForm:myFormReducer,
    formDetails:formDetailsReducer,
    getVilla:getVillaReducer,
    allForms:allFormsReducer,
    form:formReducer
})


let initialState = {}

const middlware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlware)))


export default store