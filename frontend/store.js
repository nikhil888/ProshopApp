import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { shopListReducer,shopDetailsReducer } from './reducers/shopReducers'
import { cartReducer } from './reducers/cartReducers'
import AsyncStorage from '@react-native-async-storage/async-storage';


const reducer = combineReducers({
  cart:cartReducer,
  shopList:shopListReducer,
  shopDetails:shopDetailsReducer,
})

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  }catch(e){

  }
}

  const initialState = {
    cart: {
      cartItems: [getData()],
    },
  }
const middleware = [thunk]


const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store