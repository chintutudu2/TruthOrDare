import {SpinnerProps} from '@components/Spinners/Spinner/interface';
import {styles} from '@components/Spinners/Spinner/styles';
import {Colors} from '@constants/Colors';
import {Fonts} from '@constants/Fonts';
import Constants from '@constants/index';
import {dimension, fontSize} from '@utils/ScalingUtils';
import React, {memo} from 'react';
import {Image, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import Svg, {Text as SvgText, G, Path} from 'react-native-svg';

import Animated, {
  useSharedValue,
  useDerivedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  getBottleImageFromNumber,
  onPressSpin,
} from '@components/Spinners/Spinner/helper';

const Spinner = memo(function Spinner(props: SpinnerProps) {
  const {style, playersCount = 0, playersName = [], bottleNumber = 1} = props;

  const radius = dimension.spinnerInnerCircleWidth / 2;
  const cx = dimension.spinnerInnerCircleWidth / 2;
  const cy = dimension.spinnerInnerCircleWidth / 2;

  const anglePerPart = (2 * Math.PI) / playersCount;

  const paths = [];
  const textLabels = [];
  for (let i = 0; i < playersCount; i++) {
    const startAngle = i * anglePerPart;
    const endAngle = (i + 1) * anglePerPart;

    const x1 = cx + radius * Math.cos(startAngle);
    const y1 = cy + radius * Math.sin(startAngle);
    const x2 = cx + radius * Math.cos(endAngle);
    const y2 = cy + radius * Math.sin(endAngle);

    const path = `M${cx},${cy} L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`;
    const color = Constants.SpinnerColors[i % Constants.SpinnerColors.length];

    paths.push(<Path key={i} d={path} fill={color} />);

    const textAngle = (startAngle + endAngle) / 2;
    const textRadius = radius * 0.5;

    const textX = cx + textRadius * Math.cos(textAngle);
    const textY = cy + textRadius * Math.sin(textAngle);

    textLabels.push(
      <SvgText
        key={i}
        x={textX}
        y={textY}
        fontFamily={Fonts.familyName.regular}
        textAnchor="middle"
        fontSize={fontSize.bodyTextSize}
        fontWeight="bold"
        fill={Colors.white}>
        {playersName[i]}
      </SvgText>,
    );
  }

  const animation = useSharedValue(0);

  const rotation = useDerivedValue(() => {
    return interpolate(animation.value, [0, 1], [0, 360]);
  });

  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: rotation.value + 'deg',
        },
      ],
    };
  });

  return (
    <ImageBackground
      source={Constants.Images.Spinner}
      style={[styles.container, style!]}>
      <Svg
        height={dimension.spinnerInnerCircleWidth}
        width={dimension.spinnerInnerCircleWidth}>
        {paths}
        <G>{textLabels}</G>
      </Svg>
      <TouchableWithoutFeedback onPress={() => onPressSpin(animation)}>
        <Animated.View style={[styles.bottle, animationStyle]}>
          <Image source={getBottleImageFromNumber(bottleNumber)} />
        </Animated.View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
});

export {Spinner};
