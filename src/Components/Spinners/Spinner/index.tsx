import {SpinnerProps} from '@components/Spinners/Spinner/interface';
import {styles} from '@components/Spinners/Spinner/styles';
import {Colors} from '@constants/Colors';
import {Fonts} from '@constants/Fonts';
import Constants from '@constants/index';
import {dimension, fontSize} from '@utils/ScalingUtils';
import React, {memo} from 'react';
import {Image, ImageBackground} from 'react-native';
import Svg, {Text as SvgText, G, Path} from 'react-native-svg';

const Spinner = memo(function Spinner(props: SpinnerProps) {
  const {style, playersCount = 0, playersName = []} = props;

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
      <Image source={Constants.Images.Bottle_1} style={styles.bottle} />
    </ImageBackground>
  );
});

export {Spinner};
