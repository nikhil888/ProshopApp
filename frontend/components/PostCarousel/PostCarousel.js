import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable,Button } from "react-native";
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

const PostCarousel = (props) => {

  const post = props.post;
  const width = useWindowDimensions().width;
  const navigation = useNavigation();

  
  return (
    <Pressable style={[styles.container, { width: width - 60}]} onPress = {() => {navigation.navigate('Details',{postName: post.name});}}>
      <View style={styles.innerContainer}>
        

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom  */}
          <Text style={styles.bedrooms}>
            {post.name}
          </Text>

         
        </View>
       
      </View>
   
      </Pressable>
  );
};

export default PostCarousel;