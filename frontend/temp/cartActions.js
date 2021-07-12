import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addToCart = (_id, qty) => async (dispatch, getState) => {
    const data = 
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product:_id,
      // image: data.image,
      // price: data.price,
      // countInStock: data.countInStock,
      qty,
    },
  })

  AsyncStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (_id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: _id,
  })

  AsyncStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}