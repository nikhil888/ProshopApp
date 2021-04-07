import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";


const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator>
      <Text>Loading...</Text>
      </ActivityIndicator >
      </View>
  )
}

export default Loader;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
