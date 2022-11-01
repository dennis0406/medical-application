import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import NewOrder from '../screens/NewOrder';
import Notification from '../screens/Notification';
import Bag from '../screens/Bag';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator sceneContainerStyle={{backgroundColor: 'white'}}>
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="home"
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
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="bell"
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
            tabBarIcon: () => (
              <IconFeather
                style={styles.iconCenter}
                name="plus-square"
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
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="shopping-bag"
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
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="user"
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

const styles = StyleSheet.create({
  iconCenter: {
    backgroundColor: '#4157FF',
    padding: 10,
    fontSize: 30,
    borderRadius: 4,
    color: '#FFFFFF',
  },
  iconFocused: {
    color: '#4157FF',
    fontSize: 30,
  },
  iconUnfocused: {
    color: '#090F4773',
    fontSize: 30,
  }
});
