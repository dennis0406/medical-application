import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const ProductDetail = (props) => {
  // useEffect(() => {
  // set lại 1 số thuộc tính của màn hình đó (vd title)
  //   navigation.setOptions({title: 'new title'});
  // }, []);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontSize: 24, color: 'black'}}>what you know about</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
