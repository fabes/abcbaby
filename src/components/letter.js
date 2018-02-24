import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { fetch_letter } from '../utils/alphabet';

export default class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_letter: 0,
      current_letter_bg: '#ff6600'
    }
  }
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

  gotoLetter = (op) => {
    if (op == 'next') {
      if (this.state.current_letter <= 2) {
        this.setState({
          current_letter: this.state.current_letter + 1
        })
      }
    }

    if (op == 'prev') {
      if (this.state.current_letter > 0) {
        this.setState({
          current_letter: this.state.current_letter - 1
        })
      }
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.animateLetter('a')}>
        <View style={styles.container}>
          <Text
            style={styles.letter}
          >
            {fetch_letter(this.state.current_letter).code}
        </Text>
        </View>
        <Text onPress={()=>this.gotoLetter('prev')} style={styles.nextButton}>
          Previous
        </Text>
        <Text onPress={()=>this.gotoLetter('next')} style={styles.nextButton}>
          Next
        </Text>
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
  },
  nextButton: {
    color: '#ffffff',
    padding: 30
  }
});
