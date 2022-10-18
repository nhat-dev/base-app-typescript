import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useSelector} from 'react-redux';
import {RootState} from '../store';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/detail';
import LoginScreen from '../screens/login';
import PostScreen from '../screens/posts';
import SignatureScreen from '../screens/signature';
import QRCodeScreen from '../screens/qrcode';
import MapView from '../screens/mapview';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  const linking = {
    prefixes: ['https://mychat.com', 'mychat://'],
    config: {
      screens: {
        Details: {
          path: 'details/:id',
          parse: {
            id: Number,
          },
        },
        Post: 'posts',
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Post" component={PostScreen} />
            <Stack.Screen name="Signature" component={SignatureScreen} />
            <Stack.Screen name="QRCode" component={QRCodeScreen} />
            <Stack.Screen name="MapView" component={MapView} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
