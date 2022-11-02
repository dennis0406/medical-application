import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
const NavigatedOption = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={data.nameIcon} color="#091C3F" size={28} />
      <View style={styles.content} >
        <Text style={styles.text}>{data.text}</Text>
        <Icon name="chevron-right" color="#091C3F" size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default NavigatedOption;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    borderBottomColor: '#091C3F14',
    borderBottomWidth: 1,
    paddingVertical: 15
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#091C3FBF'
  }

});
