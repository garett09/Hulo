import axios from "axios"

import {
    GET_VILLA_REQUEST,
    GET_VILLA_SUCCESS,
    GET_VILLA_FAIL,
    CLEAR_ERRORS
} from '../constants/villaConstants'

export const getVillaDetails = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_VILLA_REQUEST
        })

        const { data } = await axios.get(`/api/v1/forms`)

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

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}