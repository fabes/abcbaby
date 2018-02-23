import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Letter from './src/components/letter';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Letter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff'
  }
});
