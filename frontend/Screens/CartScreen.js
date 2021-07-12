import React, { useEffect } from 'react'
import {FlatList,View,Text} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart} from '../actions/cartActions'

const CartScreen = ({ route}) => {
    const {productId,productName} = route.params
  
    // const qty = location.search ? Number(location.search.split('=')[1]) : 1
  
    const dispatch = useDispatch()
  
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
  
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId,productName))
      }
    }, [dispatch, productId,productName])

    console.warn(cartItems)
   
  
    const list = () => {
      return cartItems.map((item) => {
        return (
          <View key={item.product} style={{margin: 10}}>
            <Text>{item.name}</Text>
          </View>
        );
      });
    };
  
    return <View>{list()}</View>;
  };
  
  export default CartScreen