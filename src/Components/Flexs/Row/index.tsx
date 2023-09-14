import {RowViewProps} from '@components/Flexs/Row/interface';
import React, {memo} from 'react';
import {View} from 'react-native';

const RowView = memo(function RowView(props: RowViewProps) {
  const {style, children} = props;
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}>
      {children}
    </View>
  );
});

export {RowView};
