import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { Card, ListItem } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailsScreen = ({ route }) => {
  const { productId,productName,productDesc } = route.params;
  //   const navigation = useNavigation();
  
  // const dispatch = useDispatch();
  // const productDetails = useSelector((state) => state.productDetails);
  // const { loading, error, product } = productDetails;

  // useEffect(() => {
  //   dispatch(listProductDetails(productId));
  // }, [dispatch, route]);

  // const addToCartHandler = () => {
  //   // history.push(`/cart/${productId}?qty=${qty}`);
  //   navigation.navigate("Cart", {
  //     productId: product._id,
  //     productQty: qty,
  //   });
  // };

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const { data } = await axios.get(`http://192.168.1.104:8080/api/products/${productId}`)

  //     setProduct(data)
  //   }

  //   fetchProduct()
  // }, [])

  // var options =
  //   ["1","2","3","4"]

  return (
    <Card>
      <Card.Title>{productName}</Card.Title>
      <Text h2>description : {productDesc}</Text>
    </Card>
  );
};

export default DetailsScreen;
