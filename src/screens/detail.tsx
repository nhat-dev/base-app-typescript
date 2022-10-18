import {RouteProp, useLinkTo, useRoute} from '@react-navigation/native';
import * as React from 'react';
import {View, Text} from 'react-native';

type RoutePropNavigation = any;

function DetailsScreen() {
  const route = useRoute<RouteProp<RoutePropNavigation>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Id: {route.params?.id}</Text>
    </View>
  );
}

export default DetailsScreen;
