import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { AppRegistry, StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import { Reddit } from './src/reddit';

export default class HongZhou4U extends Component {
  render() {
    return (
      <ScrollView>
        <LinearGradient colors={['#0069B1', '#000000']} style={styles.container}>
          <Image style={styles.hong} source={require('./img/hongZhou.png')} />
          <Text style={styles.welcome}>😍#1 off the field. #1 in our hearts😍</Text>
          <Image source={require('./img/BarrySanders.png')} />
          <Reddit />
          <Image style={{ width: 250, height: 250 }} source={{ uri: 'https://i.imgur.com/e2AABBU.png' }} />
        </LinearGradient>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  welcome: {
    fontSize: 20,
    color: '#a2aaad',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 80
  },
  button: {
    borderColor: '#a2aaad',
    width: 150,
    padding: 4,
    borderRadius: 5,
    marginTop: 100,
    left: 110
  },
  buttonText: {
    color: '#a2aaad'
  },
  hong: {
    marginTop: 20
  }
});

AppRegistry.registerComponent('HongZhou4U', () => HongZhou4U);
