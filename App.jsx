// In App.js in a new project

import * as React from 'react';
import {Button, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Auth/Login';
import BottomTabs from './src/navigation/BottomTabs';
import ProductDetail from './src/screens/Home/components/ProductDetail';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => {
          return {
            animation: 'slide_from_right',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Text>Back</Text>
                </TouchableOpacity>
              );
            },
          };
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={({route, navigation}) => {
            return {
              headerTitleAlign: 'center',
              headerTitle: route?.params?.headerTitle,
              headerLeft: () => (
                <Icon
                  name="arrow-left"
                  size={30}
                  color="#090F47"
                  onPress={() => navigation.goBack(null)}
                />
              ),
              headerRight: () => (
                <View style={{display: 'flex', flexDirection: 'row', }} >
                  <TouchableOpacity style={{position: 'relative', marginRight: 26}}>
                    <Icon size={30} color="#090F47" name="bell"
                    onPress={()=>{
                      navigation.navigate('NotificationTab');
                    }} />
                    {route.params.isNew ? <View style={styles.newNotification}></View> : ''}
                  </TouchableOpacity>
                  <Icon
                    name='shopping-bag'
                    size={30}
                    color='#090F47'
                    onPress={()=>{
                      navigation.navigate('BagTab');
                    }}
                  />
                </View>
              ),
            };
          }}
          name={'ProductDetail'}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  newNotification: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#FF0000',
    right: 5,
    borderRadius: 5,
  },
});
export default App;
