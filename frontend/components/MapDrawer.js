import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useState } from 'react'
import ListScreen from '../Screens/ListScreen';


const Drawer = createDrawerNavigator();

function MapDrawer() {
  return (
    <Drawer.Navigator drawerPosition={'right'}  drawerStyle={{ width: '10%' }}>
      <Drawer.Screen name="Home" component={ListScreen} />
    </Drawer.Navigator>
  );
}

export default MapDrawer