import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import USER from '../../utils/users';
import NavigatedOption from './components/NavigatedOption';
import { NAVIGATED_PROFILE } from '../../utils/constants';
import Icon from 'react-native-vector-icons/Feather';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader data={USER} />
      <View style={styles.listOption} >
        {NAVIGATED_PROFILE.map((option, index)=> {
          return (<NavigatedOption data={option} key={index} />)
        })}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  listOption: {
    width: '100%',
    marginTop: 42,
  }
  
});
