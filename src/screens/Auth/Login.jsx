import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const WIDTH = Dimensions.get('screen').width;
  const HEIGHT = Dimensions.get('screen').height;
  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />

        <Text style={styles.excerpt}>What you know about</Text>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.groupInput}>
          <Text style={styles.inputLabel}>Username</Text>
          <Icon name="user" size={28} color="#091C3F" style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={newText => setUserName(newText)}
            defaultValue={userName}
          />
        </View>
        <View style={styles.groupInput}>
          <Text style={styles.inputLabel}>Password</Text>
          <Icon
            name="key"
            size={28}
            color="#091C3F"
            style={styles.icon}
            onPress={() => {
              alert('clmm');
              setShow(false);
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            secureTextEntry={show}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          });
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        alert('Forgot password!');
      }} >
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#ffff',
    paddingHorizontal: 24,
    height: '100%',

  },
  containerLeft: {
    display: 'flex',
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 50,
  },
  logo: {
    width: 180,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  excerpt: {
    fontSize: 24,
    color: '#091C3F',
    marginBottom: 10,
  },
  title: {
    fontSize: 45,
    fontWeight: '900',
    color: '#091C3F',
    marginBottom: 80,
  },
  //Form
  form: {
    width: '100%',
  },
  //Group input
  groupInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#091C3F73',
    width: '100%',
    paddingTop: 18,
    marginBottom: 40,
    position: 'relative',
  },
  input: {
    width: '100%',
    position: 'relative',
    color: '#091C3FBF',
    fontSize: 18,
  },
  inputLabel: {
    position: 'absolute',
    color: '#091C3F',
    fontSize: 18,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: '50%',
  },

  //Button
  loginButton: {
    width: '100%',
    backgroundColor: '#e00047',
    paddingVertical: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFF',
    textAlign: 'center',
    fontSize: 24,
  },
  //Forgot
  forgot: {
    marginTop: 20,
    fontSize: 15,
    color: '#091C3F73'
  }
});
