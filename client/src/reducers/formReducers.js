import {
    CREATE_FORM_REQUEST,
    CREATE_FORM_SUCCESS,
    CREATE_FORM_FAIL,
    MY_FORM_REQUEST,
    MY_FORM_SUCCESS,
    MY_FORM_FAIL,
    ALL_FORM_REQUEST,
    ALL_FORM_SUCCESS,
    ALL_FORM_FAIL,
    UPDATE_FORM_REQUEST,
    UPDATE_FORM_SUCCESS,
    UPDATE_FORM_FAIL,
    UPDATE_FORM_RESET,
    FORM_DETAILS_REQUEST,
    FORM_DETAILS_SUCCESS,
    FORM_DETAILS_FAIL,
    CLEAR_ERRORS,
} from '../constants/formConstants'

export const newFormReducer = (state = {form:[]}, action ) => {
    switch(action.type){
        
        case CREATE_FORM_REQUEST:
            return{
                ...state,
                loading:true
            }
        case CREATE_FORM_SUCCESS:
            return{
                loading:false,
                form: action.payload
            }
        case CREATE_FORM_FAIL:
            console.log(action.payload)
            return{
                loading:false,
                error:action.payload
            } 
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
            default:
                return state;
    }
}
export const myFormReducer = (state = { forms: [] }, action) => {
    switch (action.type) {

        case MY_FORM_REQUEST:
            return {
                loading: true
            }

        case MY_FORM_SUCCESS:
            return {
                loading: false,
                forms: action.payload
            }

        case MY_FORM_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
export const formDetailsReducer = (state = { formsDetails: {} }, action) => {
    switch (action.type) {

        case FORM_DETAILS_REQUEST:
            return {
                loading: true
            }

        case FORM_DETAILS_SUCCESS:
            return {
                loading: false,
                forms: action.payload.forms,
                success: action.payload.success,
                formDetails: action.payload.form
                
            }

        case FORM_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}
export const allFormsReducer = (state = { forms: [] }, action) => {
    switch (action.type) {

        case ALL_FORM_REQUEST:
            return {
                loading: true
            }

        case ALL_FORM_SUCCESS:
            console.log(action.payload)

            return {
                loading: false,
                forms: action.payload,
                count: action.payload,
                
            }
            

        case ALL_FORM_FAIL:
            
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


//Update and delete form
export const formReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_FORM_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_FORM_SUCCESS:
            console.log(action.payload)
            return {
                
                ...state,
                loading: false,
                isUpdated: action.payload,
                form: action.payload
            }

        case UPDATE_FORM_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case UPDATE_FORM_RESET:
            return {
                ...state,
                isUpdated: false,
                loading: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}
