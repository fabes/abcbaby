import { StyleSheet } from 'react-native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions'; 

export const styles = StyleSheet.create({
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