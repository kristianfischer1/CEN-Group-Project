import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from "../screens/Home/Calendar";
import { MyTabBar } from "./TabBar";
import Recommendations from "../screens/Reccomendations/Recommendations";
import ContactScreen from "../screens/Contact/ContactScreen";



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name = "Contacts" component={Calendar} options={{
        tabBarLabel: 'Contacts',
        }} />
      <Tab.Screen name="Add Contact" component={ContactScreen} options={{
        tabBarLabel: 'Add Contact',
      }} />
      <Tab.Screen name="Reccomendations" component={Recommendations} options={{
        tabBarLabel: 'Reccomendations',
        }} />
    </Tab.Navigator>
  );
}

export default TabNavigator