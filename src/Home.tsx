import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './slice/counter.slice';
import {RootState} from './store';

const Home = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  console.log({count});

  return (
    <View style={{marginTop: 80}}>
      <View style={{flexDirection: 'row'}}>
        <Button
          title={'+'}
          buttonStyle={{width: 50}}
          onPress={() => dispatch(decrement())}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontSize: 20}}>{count}</Text>
        </View>
        <Button
          title={'-'}
          buttonStyle={{width: 50}}
          onPress={() => dispatch(increment())}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
