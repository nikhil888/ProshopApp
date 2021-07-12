import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { ListItem } from "react-native-elements";
import { addToCart, removeFromCart } from "../actions/cartActions";

const CartScreen = ({ route }) => {
  const { productId, qty } = route.params;

  // const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <View>
      <Text>Shopping Cart</Text>
      {/* {cartItems.length === 0 ? (
            <Message>
              Your cart is empty <Link to='/'>Go Back</Link>
            </Message>
          ) : ( */}
      <View>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => {
            item.product;
          }}
        />
        {/* {cartItems.map((item) => (
                
                  <View>
                    <Text>{item.product}  </Text>
                  </View>
              ))} */}
      </View>
      {/* )} */}
    </View>
  );
};

export default CartScreen;
