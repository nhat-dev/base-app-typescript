import {useLinkTo} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import SignatureCapture from 'react-native-signature-capture';
import Signature from '../components/Signature';
import RNSketchCanvas from '@terrylinla/react-native-sketch-canvas';

function SignatureScreen() {
  const linkTo = useLinkTo();

  const ref = React.useRef<SketchCanvas>(null);

  // const saveSign = () => {
  //   ref.current?.saveImage();
  // };

  // const resetSign = () => {
  //   ref.current?.resetImage();
  // };

  // const _onSaveEvent = result => {
  //   console.log(result);
  // };
  // const _onDragEvent = () => {
  //   console.log('dragged');
  // };

  const [source, $source] = React.useState('');
  console.log({source});

  return (
    <View style={styles.container}>
      {!!source && (
        <Image
          source={{uri: 'file://' + source}}
          style={{width: '100%', height: 200}}
        />
      )}
      <View style={{flexDirection: 'row'}}>
        <RNSketchCanvas
          containerStyle={{
            backgroundColor: 'transparent',
            flex: 1,
            flexDirection: 'column-reverse',
          }}
          canvasStyle={{
            backgroundColor: 'white',
            width: '100%',
            height: 200,
          }}
          defaultStrokeIndex={0}
          defaultStrokeWidth={5}
          undoComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>Undo</Text>
            </View>
          }
          saveComponent={
            <View style={styles.functionButton}>
              <Text style={{color: 'white'}}>Save</Text>
            </View>
          }
          savePreference={() => {
            return {
              folder: 'RNSketchCanvas',
              filename: String(Math.ceil(Math.random() * 100000000)),
              transparent: false,
              imageType: 'png',
            };
          }}
          onSketchSaved={(success, path) => {
            console.log(
              success ? 'Image saved!' : 'Failed to save image!',
              path,
            );
            if (success) {
              $source(path);
            }
          }}
        />
      </View>
    </View>
  );

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text style={{alignItems: 'center', justifyContent: 'center'}}>
        Signature Capture Extended{' '}
      </Text>
      {/* <SignatureCapture
        style={[{flex: 1}, styles.signature]}
        ref={ref}
        onSaveEvent={_onSaveEvent}
        onDragEvent={_onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        backgroundColor="#ffffff"
        strokeColor="#000000"
        minStrokeWidth={4}
        maxStrokeWidth={4}
        viewMode={'portrait'}
      /> */}

      <Signature
        ref={ref}
        lineWidth={3}
        lineColor="blue"
        canvasStyle={{borderWidth: 1, borderColor: 'grey'}}
        onBegin={() => console.log('begin')}
        onEnd={() => console.log('end')}
        onChange={signature => console.log(signature)}
      />

      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => {
            saveSign();
          }}>
          <Text>Save</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => {
            resetSign();
          }}>
          <Text>Reset</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 60,
    backgroundColor: '#39579A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default SignatureScreen;
