import {
    CREATE_FORM_REQUEST,
    CREATE_FORM_SUCCESS,
    CREATE_FORM_FAIL,
    MY_FORM_REQUEST,
    MY_FORM_SUCCESS,
    MY_FORM_FAIL,
    CLEAR_ERRORS,
} from '../constants/formConstants'

export const newFormReducer = (state = {}, action ) => {
    switch(action.type){
        
        case CREATE_FORM_REQUEST:
            return{
                ...state,
                loading:true
            }
        case CREATE_FORM_SUCCESS:
            return{
                loading:false,
                order: action.payload
            }
        case CREATE_FORM_FAIL:
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

