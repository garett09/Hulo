import axios from "axios"

import {
    CREATE_FORM_REQUEST,
    CREATE_FORM_SUCCESS,
    CREATE_FORM_FAIL,
    MY_FORM_REQUEST,
    MY_FORM_SUCCESS,
    MY_FORM_FAIL,
    CLEAR_ERRORS,
} from '../constants/formConstants'

export const createForm = (form) => async (dispatch, getState) => {
    try {

        dispatch({ type: CREATE_FORM_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/form/new', form, config)

        dispatch({
            type: CREATE_FORM_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CREATE_FORM_FAIL,
            payload: error.response.data.message
        })
    }
}
// Get curretly logged in user orders
export const myForm = () => async (dispatch) => {
    try {

        dispatch({ type: MY_FORM_REQUEST });

        const { data } = await axios.get('/api/v1/forms/me')

        dispatch({
            type: MY_FORM_SUCCESS,
            payload: data.form
        })

    } catch (error) {
        dispatch({
            type: MY_FORM_FAIL,
            payload: error.response.data.message
        })
    }
}
// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}