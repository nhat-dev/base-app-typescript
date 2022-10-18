import {Text, View} from 'react-native';
import React from 'react';
import {Button, Input} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {login} from '../slice/auth.slice';
import {useAppDispatch} from '../store';

const LoginScreen = () => {
  const [userName, setUserName] = React.useState('admin@');
  const [password, setPassword] = React.useState('admin');
  const dispatch = useAppDispatch();
  const loginForm = () => {
    dispatch(login({userName, password}));
  };

  return (
    <View style={{margin: 20}}>
      <Input
        autoCompleteType={'text'}
        value={userName}
        placeholder="User Name"
        onChangeText={text => setUserName(text)}
      />
      <Input
        autoCompleteType={'password'}
        value={password}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title={'Login'} onPress={loginForm} />
    </View>
  );
};

export default LoginScreen;
