import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'; 

import { fetch_letter } from '../utils/alphabet';

import PrevBtn from '../media/images/prev-btn.png';
import NextBtn from '../media/images/next-btn.png';

export default class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_letter: 0,
    }
  }
  animateLetter = (letter) => {
    // let audio_src = '../media/sounds/The_Farmer_In_The_Dell_Instrumental.mp3';

    // const soundObject = new Expo.Audio.Sound();

    // try {
    //   const { soundObject, status } = Expo.Audio.Sound.create(
    //     require(audio_src),
    //     { shouldPlay: true }
    //   );
    // } catch (error) {
    //   // An error occurred!
    // }
  }

  gotoLetter = (op) => {
    if (op == 'next') {
      if (this.state.current_letter <= 24) {
        this.setState({
          current_letter: this.state.current_letter + 1,
        })
      }
    }

    if (op == 'prev') {
      if (this.state.current_letter > 0) {
        this.setState({
          current_letter: this.state.current_letter - 1,
        })
      }
    }
  }
  render() {
    return (
      <TouchableOpacity onPress={() => this.animateLetter('a')}>
        <View style={styles.container}>
          <View style={{'backgroundColor': `${fetch_letter(this.state.current_letter).bg}`, 'padding': '15%'}}>
            <Text
              style={styles.letter}
            >
              {fetch_letter(this.state.current_letter).code}
            </Text>
          </View>
          <Text onPress={() => this.gotoLetter('prev')} style={styles.btn_wrapper}>
            <Image source={PrevBtn} style={styles.prev_nextButton} />
          </Text>
          <Text onPress={() => this.gotoLetter('next')} style={styles.btn_wrapper}>
            <Image source={NextBtn} style={styles.prev_nextButton} />
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(75),
    height: responsiveHeight(50),
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: '#ffffff',
    fontSize: responsiveFontSize(25)
  },
  prev_nextButton: {
    width: 700,
    height: 200,
  },
  btn_wrapper: {
    marginBottom: 18,
    marginTop: 18,
  }

});
