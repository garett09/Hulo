import axios from "axios"

import {
    GET_VILLA_REQUEST,
    GET_VILLA_SUCCESS,
    GET_VILLA_FAIL,
    ADMIN_VILLAS_FAIL,
    ADMIN_VILLAS_REQUEST,
    ADMIN_VILLAS_SUCCESS,
    ALL_VILLAS_REQUEST,
    ALL_VILLAS_SUCCESS,
    ALL_VILLAS_FAIL,
    CLEAR_ERRORS,
} from '../constants/villaConstants'

export const getVillaDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_VILLA_REQUEST
        })

        const { data } = await axios.get(`/api/v1/villas`)
        

        dispatch({
            type: GET_VILLA_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: GET_VILLA_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getAdminVillas = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_VILLAS_REQUEST })

        const { data } = await axios.get(`/api/v1/admin/villas`)
        
        dispatch({
            type: ALL_VILLAS_SUCCESS,
            payload: data.villas,
        })

    } catch (error) {

        dispatch({
            type: ALL_VILLAS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}