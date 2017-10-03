import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'apsl-react-native-button';
import { AppRegistry, StyleSheet, Text, View, Image, Alert } from 'react-native';
// import Imugr from './Imugr';
export class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
    fetch('https://www.reddit.com/user/KouRouShuaige/comments/.json', {
      Accept: 'application/json'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ comments: data.data.children });
      });
  }

  render() {
    return (
      <View>
        {this.state.comments.map(comment => (
          <Text style={styles.text} key={comment.data.created}>
            🦁{comment.data.body}🦁
          </Text>
        ))}
      </View>
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
  hong: {
    width: 300,
    height: 40
  },
  text: {
    fontSize: 20,
    color: '#a2aaad',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 10
  }
});
