import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title={'Create Signature'}
        onPress={() => navigation.navigate('Signature')}
        containerStyle={{margin: 14}}
      />
      <Button
        title={'QR Code'}
        onPress={() => navigation.navigate('QRCode')}
        containerStyle={{margin: 14}}
      />
      <Button
        title={'Show Map View'}
        onPress={() => navigation.navigate('MapView')}
        containerStyle={{margin: 14}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
