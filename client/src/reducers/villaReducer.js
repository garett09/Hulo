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
} from "../constants/villaConstants";

export const getVillaReducer = (state = { villas: [] }, action) => {
  switch (action.type) {
    case GET_VILLA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_VILLA_SUCCESS:
      return {
        loading: false,
        villas: action.payload.villa,
        success: action.payload.success,
      };

    case GET_VILLA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const getVillasReducer = (state = { villas: [] }, action) => {
  switch (action.type) {
    case ALL_VILLAS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ALL_VILLAS_SUCCESS:
      return {
        loading: false,
        villas: action.payload.villas,
        success: action.payload.success,
        villasCount: action.payload.villasCount,
      };

    case ALL_VILLAS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
