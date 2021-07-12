import {
    SHOP_LIST_REQUEST,
    SHOP_LIST_SUCCESS,
    SHOP_LIST_FAIL,
    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,
    SHOP_DELETE_REQUEST,
    SHOP_DELETE_SUCCESS,
    SHOP_DELETE_FAIL,
    SHOP_CREATE_RESET,
    SHOP_CREATE_FAIL,
    SHOP_CREATE_SUCCESS,
    SHOP_CREATE_REQUEST,
    SHOP_UPDATE_REQUEST,
    SHOP_UPDATE_SUCCESS,
    SHOP_UPDATE_FAIL,
    SHOP_UPDATE_RESET,
    SHOP_CREATE_REVIEW_REQUEST,
    SHOP_CREATE_REVIEW_SUCCESS,
    SHOP_CREATE_REVIEW_FAIL,
    SHOP_CREATE_REVIEW_RESET,
    SHOP_TOP_REQUEST,
    SHOP_TOP_SUCCESS,
    SHOP_TOP_FAIL,
  } from "../constants/shopConstants";
  import axios from "axios";
  
  export const listshops = () => async (dispatch) => {
      try {
        dispatch({ type: SHOP_LIST_REQUEST })
    
        const { data } = await axios.get('http://192.168.1.102:8080/api/shops')
    
        dispatch({
          type: SHOP_LIST_SUCCESS,
          payload: data,
        })
      } catch (error) {
        dispatch({
          type: SHOP_LIST_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      }
    }
  
  
    
  export const listshopDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: SHOP_DETAILS_REQUEST })
  
      const { data } = await axios.get(`http://192.168.1.101:8080/api/shops/${id}`)
  
      dispatch({
        type: SHOP_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: SHOP_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }