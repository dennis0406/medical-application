import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
const Notification = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 24, color: 'black'}}>Notification</Text>
      <Icon name='star' size={34} color= 'black' />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
