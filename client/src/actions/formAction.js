import axios from "axios"

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
    FORM_DETAILS_REQUEST,
    FORM_DETAILS_SUCCESS,
    FORM_DETAILS_FAIL,
    UPDATE_FORM_REQUEST,
    UPDATE_FORM_FAIL,
    UPDATE_FORM_SUCCESS,
    DELETE_FORM_REQUEST,
    DELETE_FORM_FAIL,
    DELETE_FORM_SUCCESS,
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
            payload: data.form
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
            payload: data.forms
        })

    } catch (error) {
        dispatch({
            type: MY_FORM_FAIL,
            payload: error.response.data.message
        })
    }
}
// Get order details
export const getFormDetails = (id) => async (dispatch) => {

    try {

        dispatch({ type: FORM_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/form/${id}`)

        dispatch({
            type: FORM_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FORM_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}
// Get all Forms -admins only
export const allForms = () => async (dispatch) => {

    try {
        dispatch({ type: ALL_FORM_REQUEST });

        const { data } = await axios.get(`/api/v1/admin/forms/all`)
        console.log(data)

        dispatch({
            type: ALL_FORM_SUCCESS,
            payload: data.forms
        })

    } catch (error) {
        dispatch({
            type: ALL_FORM_FAIL,
            payload: error.response.data.message
        })
    }
}

// update order
export const updateForm = (id, formData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_FORM_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/v1/admin/forms/${id}`, formData, config)

        dispatch({
            type: UPDATE_FORM_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: UPDATE_FORM_FAIL,
            payload: error.response.data.message
        })
    }
}

// update order
export const deleteForm = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_FORM_REQUEST })

        const { data } = await axios.delete(`/api/v1/admin/forms/${id}`)

        dispatch({
            type: DELETE_FORM_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_FORM_FAIL,
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