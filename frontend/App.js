import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {Provider} from 'react-redux';
import store from './store'
import TabsScreen from "./Screens/TabsScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import CartScreen from "./Screens/CartScreen";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



export default function App() {
  return (
    <Provider store={store}>
 <NavigationContainer>
    <Stack.Navigator initialRouteName="Tabs">
      <Stack.Screen name="Tabs" component={TabsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
    </Provider>
   
  );
}

