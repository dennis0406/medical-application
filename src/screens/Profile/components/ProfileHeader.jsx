import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ProfileHeader = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={data.image} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.title}>Hi, {data.name}</Text>
        <Text style={styles.excerpt}>Welcome to Medtech</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  excerpt: {
    fontSize: 14,
    fontWeight: '400',
    color: '#091C3F73'
  },
  title: {
    fontSize: 20,
    color: '#091C3F',
    fontWeight: '700',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container: {
    marginTop: 26,
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 62,
    height: 62,
    resizeMode: 'cover',
    borderRadius: 31,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14.78,

    elevation: 22,
    marginRight: 16
  },
  
});
