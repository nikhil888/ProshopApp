import React,{useState} from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
  Button,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from "./style.js";

const PostProductList = ({ productList }) => {
  const navigation = useNavigation();

  const [count, setCount] = useState(0);
  const width = useWindowDimensions().width;


  return (
    <Pressable onPress={() => {
      navigation.navigate("DetailsScreen", {
        productId: productList.id,
        productName:productList.name,
        productDesc:productList.description,
      });
    }}>
      <View style={styles.innerContainer}>

          <Text style={styles.name}>{productList.name}</Text>
          <View style={styles.row}>
            {/* <Pressable
              onPress={() => setCount(Math.max(0, count - 1))}
              style={styles.button}>
              <Text style={{fontSize: 30, color: '#474747'}}>-</Text>
            </Pressable>

            <Text style={{marginHorizontal: 20, fontSize: 26}}>{count}</Text>

            <Pressable
              onPress={() => setCount(count + 1)}
              style={styles.button}>
              <Text style={{fontSize: 30, color: '#474747'}}>+</Text>
            </Pressable> */}

            <Pressable onPress={() => {
          navigation.navigate("CartScreen", {
            productId: productList.id,
            productName:productList.name,
            qty:1
          });
        }}><Text>add</Text></Pressable>


          </View>
            
          <Text style={{fontSize: 30, color: '#474747'}}>${productList.price}</Text>


      </View>
      </Pressable>
   
  );
};

export default PostProductList;
