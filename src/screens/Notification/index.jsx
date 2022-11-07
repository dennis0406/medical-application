import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import MapViews from '../MapViews';
const Notification = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <MapViews />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
