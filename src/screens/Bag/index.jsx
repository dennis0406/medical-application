import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapViews from '../MapViews';
const Bag = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <MapViews/>
    </View>
  );
};

export default Bag;

const styles = StyleSheet.create({});
