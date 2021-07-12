import { CART_ADD_ITEM,
   CART_REMOVE_ITEM,
   CART_SAVE_SHIPPING_ADDRESS,
   CART_SAVE_PAYMENT_METHOD,
  } from '../constants/cartConstants'
  import AsyncStorage from '@react-native-async-storage/async-storage'

export const addToCart = (id,name) => async (dispatch, getState) => {
  // const { data } = await axios.get(`/api/products/${id}`)


  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: id,
      name:name,
    },
  })

  AsyncStorage.setItem('@storage_Key', JSON.stringify(getState().cart.cartItems))
}



