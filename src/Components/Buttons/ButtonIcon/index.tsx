import {ButtonIconProps} from '@components/Buttons/ButtonIcon/interface';
import {styles} from '@components/Buttons/ButtonIcon/styles';
import Constants from '@constants/index';
import React, {memo} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';

const ButtonIcon = memo(function ButtonIcon(props: ButtonIconProps) {
  const {
    background = Constants.Images.ButtonIconBg,
    style,
    Icon,
    isValid,
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress} disabled={!isValid}>
      <ImageBackground
        source={background}
        style={[styles.backgroundStyle, style!]}>
        {Icon}
      </ImageBackground>
    </TouchableOpacity>
  );
});

export {ButtonIcon};
