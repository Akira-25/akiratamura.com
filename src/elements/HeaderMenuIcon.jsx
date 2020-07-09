// options in Stack.Screen ****************************

import 'react-native-gesture-handler';
import * as React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
// Hooks
import useIsLargeScreen from '../hooks/IsLargeScreen';

export default function useHeaderMenuIcon() {
  const IsLargeScreen = useIsLargeScreen();

  const headerMenuIcon = ({ navigation }) => ({
    headerLeft: () => (
      <Icon.Button
        name="ios-menu"
        size={40}
        backgroundColor="#4E94B9"
        onPress={() => navigation.openDrawer()}
      />
    ),
  });

  return (IsLargeScreen ? null : headerMenuIcon);
}

// options in StackNavigator
/*
options={({ navigation }) => ({
  headerLeft: () => (
    <Icon.Button
      name="ios-menu"
      size={30}
      backgroundColor="#4E94B9"
      onPress={() => navigation.openDrawer()}
    />
  ),
})}
*/
