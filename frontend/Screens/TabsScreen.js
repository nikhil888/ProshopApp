import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "./MapScreen";
import ListScreen from "./ListScreen";


const Tabs = createBottomTabNavigator();

export default TabsScreen = () => (
    <Tabs.Navigator>
      <Tabs.Screen name="Maps" component={MapScreen} />
      <Tabs.Screen name="List" component={ListScreen} />
     
    </Tabs.Navigator>
  );
  

  