import hapticFeedback from '@utils/HapticUtils';
import {push} from '@helpers/NavigatorHelper';
import Constants from '@constants/index';
import {createTable, getDBConnection} from '@database/index';

function onPressLetsPlay() {
  hapticFeedback.triggerImpactHeavy();
  push(Constants.NavRoutes.Age);
}

function onPressSettings() {
  hapticFeedback.triggerImpactHeavy();
  push(Constants.NavRoutes.Settings);
}

async function initDatabase() {
  try {
    const db = await getDBConnection();
    await createTable(db);
  } catch (error) {
    console.error('Lets Play: initDatabase: ', error);
  }
}

export {onPressLetsPlay, onPressSettings, initDatabase};
