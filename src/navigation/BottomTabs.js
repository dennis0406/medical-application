import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Icon from 'react-native-vector-icons/Ionicons';
import NewOrder from '../screens/NewOrder';
import Notification from '../screens/Notification';
import Bag from '../screens/Bag';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={({backgroundColor: 'white'}, {height: 100})}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Icon
                style={{color: focused ? '#4157FF' : '#090F4773'}}
                name="home-outline"
                size={18}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="NotificationTab"
        component={Notification}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Icon
                style={{color: focused ? '#4157FF' : '#090F4773'}}
                name="notifications-outline"
                size={18}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="NewOrderTab"
        component={NewOrder}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Icon
                style={{color: focused ? '#4157FF' : '#090F4773'}}
                name="add-circle-outline"
                size={18}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="BagTab"
        component={Bag}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Icon
                style={{color: focused ? '#4157FF' : '#090F4773'}}
                name="archive-outline"
                size={18}
              />
            ),
            headerShown: false,
          };
        }}
      />

      <BottomTab.Screen
        name="SettingTab"
        component={Setting}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <Icon
                style={{color: focused ? '#4157FF' : '#090F4773'}}
                name="person-outline"
                size={18}
              />
            ),
            headerShown: false,
          };
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
