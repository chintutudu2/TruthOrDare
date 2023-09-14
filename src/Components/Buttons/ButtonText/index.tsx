import {ButtonTextProps} from '@components/Buttons/ButtonText/interface';
import {styles} from '@components/Buttons/ButtonText/styles';
import Constants from '@constants/index';
import React, {memo} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';

const ButtonText = memo(function ButtonText(props: ButtonTextProps) {
  const {style, Icon, isValid, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={!isValid}>
      <ImageBackground
        source={Constants.Images.ButtonTextBg}
        style={[styles.backgroundStyle, style!]}>
        {Icon}
      </ImageBackground>
    </TouchableOpacity>
  );
});

export {ButtonText};