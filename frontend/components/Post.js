import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

const product = ({product}) => {
  const navigation = useNavigation();
 
  return (
    <Card>
      <Pressable
        onPress={() => {
          navigation.navigate("Details", {
            productName: product.name,
            productId: product._id,
            productStock: product.countInStock,
          });
        }}
      >
        <Card.Title>{product.name}</Card.Title>

        <Text>${product.price}</Text>
      </Pressable>
    </Card>
  );
};

export default product;
