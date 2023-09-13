import {AppLayoutProps} from '@components/Layouts/AppLayout/interface';
import {styles} from '@components/Layouts/AppLayout/styles';
import Constants from '@constants/index';
import React, {FC} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const AppLayout: FC<AppLayoutProps> = (props: AppLayoutProps) => {
  const {children, contentContainerStyle, hasScrollView, disableScroll} = props;
  return (
    <ImageBackground
      source={Constants.Images.AppBackground_1}
      resizeMode="cover"
      style={styles.container}>
      <SafeAreaView
        style={styles.safeArea}
        edges={['top', 'left', 'right', 'bottom']}>
        {hasScrollView ? (
          <ScrollView
            scrollEnabled={!disableScroll}
            style={styles.scrollView}
            contentContainerStyle={[
              styles.contentContainer,
              contentContainerStyle,
            ]}>
            {children}
          </ScrollView>
        ) : (
          <View
            style={[
              styles.scrollView,
              styles.contentContainer,
              contentContainerStyle,
            ]}>
            {children}
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export {AppLayout};
