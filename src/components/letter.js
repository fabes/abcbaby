import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Letter extends React.Component {
  animateLetter = (letter) => {
    let audio_src = '../media/sounds/The_Farmer_In_The_Dell_Instrumental.mp3';

    const soundObject = new Expo.Audio.Sound();

    try {
      const { soundObject, status } = Expo.Audio.Sound.create(
        require(audio_src),
        { shouldPlay: true }
      );
    } catch (error) {
      // An error occurred!
    }

  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.animateLetter('a')}>
        <View style={styles.container}>
          <Text
            style={styles.letter}
          >
            A
        </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '70%',
    height: '70%',
    backgroundColor: '#ff6600',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 150,
    marginTop: 100,
  },
  letter: {
    color: '#ffffff',
    fontSize: 350
  }
});
