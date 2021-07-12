import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {Provider} from 'react-redux';
import store from './store'
// import TabsScreen from "./Screens/TabsScreen";
// import ShopDetailsScreen from "./Screens/ShopDetailsScreen/ShopDetailsScreen";
// import CartScreen from "./Screens/CartScreen";
// import DetailsScreen from "./Screens/DetailsScreen";
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeNavigator from "./navigation/home";


const Drawer = createDrawerNavigator();

const dummyScreen = (props) => {
  <View style={{justifyContent:'center' ,alignItems:'center'}}>
  <Text>{props.name}</Text>
  </View>
}


export default function App() {
  return (
    <Provider store={store}>
 <NavigationContainer>
   
   <Drawer.Navigator>
     <Drawer.Screen name="home" component={HomeNavigator}/>
     <Drawer.Screen name="Profile">
      {()=> <dummyScreen name={"Login"}/>} 
       </Drawer.Screen>


   </Drawer.Navigator>
  </NavigationContainer>
    </Provider>
   
  );
}

