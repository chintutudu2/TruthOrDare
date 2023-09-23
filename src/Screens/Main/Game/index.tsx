import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/Game/styles';
import {Image} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon} from '@components/Buttons';
import {RowView} from '@components/Flexs';

//FIXME: Will be removed when store is added
const players: string[] = ['Jackson', 'Scarlett', 'Liam'];

const Game = memo(function Game(props) {
  return (
    <Components.Layouts.AppLayout
      background={Constants.Images.AppBackground_3}
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <Image source={Constants.Images.TruthDareGameLogo} style={styles.logo} />
      <Components.Spinners.Spinner
        playersCount={players.length}
        playersName={players}
      />
      <RowView style={styles.footerContainer}>
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.SoundIcon} />}
        />
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.RankIcon} />}
        />
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.BottleIcon} />}
        />
      </RowView>
    </Components.Layouts.AppLayout>
  );
});

export {Game};
