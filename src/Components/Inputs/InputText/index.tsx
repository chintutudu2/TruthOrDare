import {InputTextProps} from '@components/Inputs/InputText/interface';
import {styles} from '@components/Inputs/InputText/styles';
import Constants from '@constants/index';
import React, {memo} from 'react';
import {ImageBackground, TextInput} from 'react-native';

const InputText = memo(function InputText(props: InputTextProps) {
  const {
    background = Constants.Images.TextInputBg,
    style,
    textInputStyle,
    placeholder,
    placeholderColor,
    value,
    onChangeText,
  } = props;

  return (
    <ImageBackground
      source={background}
      style={[styles.backgroundStyle, style!]}>
      <TextInput
        style={[styles.textInputStyle, textInputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize={'words'}
      />
    </ImageBackground>
  );
});

export {InputText};
