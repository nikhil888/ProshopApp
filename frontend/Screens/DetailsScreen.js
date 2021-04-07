import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { Card, ListItem } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailsScreen = ({ route }) => {
    const navigation = useNavigation();
   
  const { productId } = route.params;
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, route]);

  const addToCartHandler = () => {
    // history.push(`/cart/${productId}?qty=${qty}`);
    navigation.navigate("Cart", {
      productId: product._id,
      productQty: qty,
    });
  };

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`http://192.168.1.104:8080/api/products/${productId}`)

  //     setProduct(data)
  //   }

  //   fetchProduct()
  // }, [])

  var options =
    ["1","2","3","4"]

  return (
    <Card>
      <Card.Title>{product.name}</Card.Title>
      <Text h2>Price: ${product.price}</Text>
      <Text h2>description : {product.description}</Text>

      <Button
        title="add to cart"
        onPress={addToCartHandler}
        className="btn-block"
        type="button"
        disabled={product.countInStock === 0}
      />
{/* 
{product.countInStock > 0 && (
        <View>
          <Text>Qty</Text>
          <Picker
            selectedValue={qty}
            style={{ height: 50, width: 100 }}
            onValueChange={(e) => setQty(e.target.value)}
          >
            {[...Array(product.countInStock).keys()].map((x) => (
              <Picker.Item key={x + 1} value={x + 1}>
                {x + 1}
              </Picker.Item>
            ))}
          </Picker>
        </View>
      )} */}
      <View>
      <Picker
        selectedValue={qty}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setQty(itemValue)}
      >
         {/* <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" /> */}
          {/* {[...Array(product.countInStock).keys()].map((x) => {
         return (< Picker.Item  value={x+1} key={x+1} />);
        })}    */}
         {Object.keys(options).map((x) => {
        return (<Picker.Item label={options[x]} value={x} key={x}/>) //if you have a bunch of keys value pair
    })}
      </Picker>
    </View>
    </Card>
  );
};

export default DetailsScreen;
