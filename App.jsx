import 'react-native-gesture-handler';
import * as React from 'react';
import * as firebase from 'firebase/app';
// Librarys
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Screens
import { HomeStackNavigator, AboutStackNavigator, AppsStackNavigator } from './src/screens/StackNavigators';
// Hooks
import useIsLargeScreen from './src/hooks/IsLargeScreen';
import ENV from './env.json';

require('firebase/firestore');

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DATABASE_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
  appId: ENV.FIREBASE_APP_ID,
  measurementId: ENV.FIREBASE_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

const D = createDrawerNavigator();
// export
export default function App() {
  // Hooks
  const IsLargeScreen = useIsLargeScreen();
  const drawerAuto = (IsLargeScreen ? 'permanent' : 'back');
  return (
    <NavigationContainer>
      <D.Navigator drawerType={drawerAuto} drawerStyle={styles.drawer}>
        <D.Screen name="Home" component={HomeStackNavigator} />
        <D.Screen name="About" component={AboutStackNavigator} />
        <D.Screen name="Apps" component={AppsStackNavigator} />
      </D.Navigator>
    </NavigationContainer>
  );
}

// Style
const styles = ({
  drawer: {
    backgroundColor: '#D2E6F1',
    width: 200,
  },
});
