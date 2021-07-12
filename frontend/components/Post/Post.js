import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import styles from './styles';

const product = ({product}) => {
  const navigation = useNavigation();
 
  return (
    <Card>
      <View style={styles.content} >
      <Pressable
        onPress={() => {
          navigation.navigate("ShopDetails", {
            productList: product.shopProducts,
            productName:product.name,
            productImage:product.image
          });
        }}
      >
         <Image
        style={styles.image}
        source={{ uri: product.image }}/>
        <Card.Title style={styles.card}>{product.name}</Card.Title>
        <Text style={styles.description}>{product.description}</Text>

      </Pressable>
      </View>
      
    </Card>
  );
};

export default product;
