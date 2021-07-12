import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  Button,
} from "react-native";
import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";

const PostCarousel = ({ product }) => {
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.container, { width: width - 60 }]}
      onPress={() => {
        navigation.navigate("ShopDetails", {
          productList: product.shopProducts,
          productName:product.name,
          productImage:product.image
        });
      }}
    >
      <View style={styles.innerContainer}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
            <Image style={styles.image} source={{ uri: product.image }} />

          <Text style={styles.name}>{product.name}</Text>

        </View>
      </View>
    </Pressable>
  );
};

export default PostCarousel;
