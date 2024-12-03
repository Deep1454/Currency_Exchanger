import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/AboutScreen'; 
import MainScreen from '../screens/MainScreen';
import { Ionicons } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainTab"
        screenOptions={{
          headerShown: false, 
          tabBarStyle: {
            backgroundColor: '#31473A', 
            borderTopWidth: 0, 
            height: 70, 
            paddingTop: 5, 
            paddingBottom: 10,
          },
          tabBarActiveTintColor: '#4CAF50', 
          tabBarInactiveTintColor: '#888888', 
          tabBarLabelStyle: {
            fontSize: 14, 
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="MainTab"
          component={MainScreen}
          options={{
            tabBarLabel: 'Main',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="swap-horizontal" size={size} color={color} /> 
            ),
          }}
        />
        <Tab.Screen
          name="AboutTab"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About', 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} /> 
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
