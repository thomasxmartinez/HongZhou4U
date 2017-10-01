import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class HongZhou4U extends Component {
  render() {
    return (
      <LinearGradient colors={['#0069B1', '#000000']} style={styles.container}>
        <Image source={require('./img/hongZhou.png')} />
        <Text style={styles.welcome}>MostRecentCommentHere</Text>
        <Image source={require('./img/BarrySanders.png')} />
        <Button style={styles.button} textStyle={styles.buttonText} children={'MVP SAYS'} />
      </LinearGradient>
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
    width: 300,
    height: 40
  }
});

AppRegistry.registerComponent('HongZhou4U', () => HongZhou4U);
