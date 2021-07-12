import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import AsyncStorage from '@react-native-async-storage/async-storage';


const reducer = combineReducers({
  cart:cartReducer,
})


const cartItemsFromStorage = AsyncStorage.getItem('cartItems')
  ? JSON.parse(AsyncStorage.getItem('cartItems'))
  : []


  const initialState = {
    cart: {
      cartItems: cartItemsFromStorage,
    },
  }
const middleware = [thunk]


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store