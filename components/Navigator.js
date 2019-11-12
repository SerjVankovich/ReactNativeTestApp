import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import PicturesGrid from './PicturesGrid';

import {createAppContainer} from 'react-navigation';
import Picture from './Picture';

const Navigator = createStackNavigator({
  Pictures: {screen: PicturesGrid},
  Picture: {screen: Picture},
});

const container = createAppContainer(Navigator);
export default container;
