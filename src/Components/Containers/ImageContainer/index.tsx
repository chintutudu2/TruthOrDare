import {ImageContainerProps} from '@components/Containers/ImageContainer/interface';
import {getScaleSizeWidth} from '@utils/ScalingUtils';
import React, {memo} from 'react';
import {View} from 'react-native';

const ImageContainer = memo(function ImageContainer(
  props: ImageContainerProps,
) {
  const {style, width = 375, height = 375, children} = props;
  return (
    <View
      style={[
        {
          width: getScaleSizeWidth(width),
          height: getScaleSizeWidth(height),
        },
        style,
      ]}>
      {children}
    </View>
  );
});

export {ImageContainer};
