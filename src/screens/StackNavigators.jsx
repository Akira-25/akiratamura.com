/*
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import Home from './Home';
import About from './About';
import MyApps from './MyApps';
import SimpleNotes from './SimpleNotes';
import App2 from './App2';
import PrivacyPolicy from './PrivacyPolicy';
// import PP_SimpleNotes from './PrivacyPolicy';
// Elements
import useHeaderMenuIcon from '../elements/HeaderMenuIcon';

const S = createStackNavigator();

// HomeStack -------------------------------------------------
export function HomeStackNavigator() {
  const HMI = useHeaderMenuIcon();
  return (
    <S.Navigator screenOptions={styles.header}>
      <S.Screen name="Home" component={Home} options={HMI} />
    </S.Navigator>
  );
}
// AboutStack -------------------------------------------------
export function AboutStackNavigator() {
  const HMI = useHeaderMenuIcon();
  return (
    <S.Navigator screenOptions={styles.header}>
      <S.Screen name="About" component={About} options={HMI} />
    </S.Navigator>
  );
}
// AppsStack -------------------------------------------------
export function AppsStackNavigator() {
  const HMI = useHeaderMenuIcon();
  return (
    <S.Navigator screenOptions={styles.header}>
      <S.Screen name="My Apps" component={MyApps} options={HMI} />
      <S.Screen name="SimpleNotes" component={SimpleNotes} />
      <S.Screen name="App2" component={App2} />
      <S.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </S.Navigator>
  );
}

// Style
const styles = ({
  header: {
    headerTitleAlign: 'center',
    headerTintColor: 'white',
    headerBackTitle: null,
    headerTitleStyle: { fontSize: 18 },
    headerStyle: {
      height: 70,
      backgroundColor: '#4E94B9',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
  },
});
*/
