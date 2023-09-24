import {ButtonTextProps} from '@components/Buttons/ButtonText/interface';
import {styles} from '@components/Buttons/ButtonText/styles';
import Constants from '@constants/index';
import React, {memo} from 'react';
import {ImageBackground, Text, TouchableOpacity} from 'react-native';

const ButtonText = memo(function ButtonText(props: ButtonTextProps) {
  const {
    background = Constants.Images.ButtonTextBg,
    style,
    text,
    isValid,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={!isValid}>
      <ImageBackground
        source={background}
        style={[styles.backgroundStyle, style!]}>
        {text && <Text style={styles.textStyle}>{text}</Text>}
      </ImageBackground>
    </TouchableOpacity>
  );
});

export {ButtonText};
