import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer,productDetailsReducer } from './reducers/productReducers'
import { shopListReducer } from './reducers/shopReducers'
import { cartReducer } from './reducers/cartReducers'
import { AsyncStorage } from 'react-native';


const reducer = combineReducers({
  productList: productListReducer,
  shopList :shopListReducer
})




const initialState = {
 
}
const middleware = [thunk]


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store