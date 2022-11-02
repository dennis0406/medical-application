import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import IconFeather from 'react-native-vector-icons/Feather';
import NewOrder from '../screens/NewOrder';
import Notification from '../screens/Notification';
import Bag from '../screens/Bag';
import {ISNEW} from '../utils/constants';
import Profile from '../screens/Profile';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{tabBarStyle: {position: 'absolute', bottom: 0, height: 70}}}>
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
            tabBarIcon: ({focused, isNew = ISNEW}) => (
              <View style={{position: 'relative'}}>
                <IconFeather
                  style={focused ? styles.iconFocused : styles.iconUnfocused}
                  name="bell"
                />
                {isNew ? <View style={styles.newNotification}></View> : ''}
              </View>
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
              <IconFeather style={styles.iconCenter} name="plus-square" />
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
        name="Profile"
        component={Profile}
        options={() => {
          return {
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
              <IconFeather
                style={focused ? styles.iconFocused : styles.iconUnfocused}
                name="user"
              />
            ),
            headerTitle: 'My Profile',
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
  },
  newNotification: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#FF0000',
    right: 5,
    borderRadius: 5,
  },
});
