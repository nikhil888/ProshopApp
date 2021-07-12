import React from "react";
// import {Provider} from 'react-redux';
// import store from './store'
import TabsScreen from "../Screens/TabsScreen";
import ShopDetailsScreen from "../Screens/ShopDetailsScreen/ShopDetailsScreen";
import CartScreen from "../Screens/CartScreen";
import DetailsScreen from "../Screens/DetailsScreen";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



export default function HomeNavigator() {
  return (

    <Stack.Navigator initialRouteName="Tabs"  screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Tabs" component={TabsScreen} />
      <Stack.Screen name="ShopDetails" component={ShopDetailsScreen}/>
      <Stack.Screen name="CartScreen" component={CartScreen}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
    </Stack.Navigator>

   
  );
}

