
import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const Message = () => {
 
  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default Message