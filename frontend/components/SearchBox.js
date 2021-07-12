import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { View,TextInput,StyleSheet } from 'react-native';

const SearchBox = () => {

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
        placeholder='Search Products...'
      />
      <FontAwesome name="search"  size={20} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    margin:10,
    
     flexDirection: "row",
   height:65
  },
  textInput: {
    fontSize: 20,
    color:'black',
  },
  itemStyle: {
    padding: 10,
  },
});

export default SearchBox