import 'react-native-gesture-handler';
import * as React from 'react';
import * as firebase from 'firebase/app';
// Librarys
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useLinking, NavigationContainer } from '@react-navigation/native';

import { useDimensions } from '@react-native-community/hooks';

import Icon from 'react-native-vector-icons/Ionicons';
// expo
import { Linking } from 'expo';
// Screens
import Home from './src/screens/Home';
import About from './src/screens/About';
import Applications from './src/screens/applications/Applications';
import SimpleNotes from './src/screens/applications/simplenotes/SimpleNotes';
// import App2 from './src/screens/App2';
import PrivacyPolicy from './src/screens/applications/simplenotes/PrivacyPolicy';
// Hooks
import useIsLargeScreen from './src/hooks/IsLargeScreen';

// firebase/firestore -------------------------------------------------
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
//  -----------------------------------------------------------------------

// StackNavigator -----------------------------------------------------------------------
const S = createStackNavigator();
const D = createDrawerNavigator();
// HomeStack -------------------------------------------------
function HomeStackNavigator() {
  return (
    <S.Navigator screenOptions={HeaderMenuIcon}>
      <S.Screen name="HomeScreen" component={Home} options={{ title: 'Home' }} />
    </S.Navigator>
  );
}
// AboutStack -------------------------------------------------
function AboutStackNavigator() {
  return (
    <S.Navigator screenOptions={HeaderMenuIcon}>
      <S.Screen name="AboutScreen" component={About} options={{ title: 'About' }} />
    </S.Navigator>
  );
}
// AppsStack -------------------------------------------------
function AppsStackNavigator() {
  return (
    <S.Navigator screenOptions={styles.header}>
      <S.Screen name="AppsScreen" component={Applications} options={({ title: 'Apps' }, HeaderMenuIcon)} />
      {/* MainAppsScreen */}
      {/* SimpleNotes */}
      <S.Screen name="SimpleNotes" component={SimpleNotesStack} options={{ title: 'SimpleNotes' }} />
    </S.Navigator>
  );
}
// Apps -------------------------------------------------
// ---SimpleNotes -------------------------------------------------
function SimpleNotesStack() {
  return (
    <S.Navigator>
      <S.Screen name="SimpleNotesHomeScreen" component={SimpleNotes} />
      <S.Screen name="PrivacyPolicyScreen" component={PrivacyPolicy} />
    </S.Navigator>
  );
}

// DeepLink -------------------------------------------------
const prefix = Linking.makeUrl('/');
const config = {
  HomeDrawer: {
    path: 'home',
    screens: {
      HomeScreen: 'home',
    },
  },
  //
  AboutDrawer: {
    path: 'about',
    screens: {
      AboutScreen: 'about',
    },
  },
  //
  AppsDrawer: {
    path: 'apps',
    screens: {
      //
      SimpleNotes: {
        path: 'simplenotes',
        screens: {
          SimpleNotesHomeScreen: 'home',
          PrivacyPolicyScreen: 'privacypolicy',
        },
      },
    },
  },
  //
};
//  -----------------------------------------------------------------------

export default function App() {
  // IsLargeScreen
  const IsLargeScreen = useIsLargeScreen();
  const drawerAuto = (IsLargeScreen ? 'permanent' : 'back');
  // DeepLink
  const ref = React.useRef();
  const { getInitialState } = useLinking(ref, { prefixes: [prefix], config });
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    getInitialState()
      .catch(() => {})
      .then((state) => {
        if (state !== undefined) {
          setInitialState(state);
        }
        setIsReady(true);
      });
  }, [getInitialState]);
  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer initialState={initialState} ref={ref}>
      <D.Navigator drawerType={drawerAuto} drawerStyle={styles.drawer}>
        <D.Screen name="HomeDrawer" component={HomeStackNavigator} options={{ title: 'Home' }} />
        <D.Screen name="AboutDrawer" component={AboutStackNavigator} options={{ title: 'About' }} />
        <D.Screen name="AppsDrawer" component={AppsStackNavigator} options={{ title: 'Apps' }} />
      </D.Navigator>
    </NavigationContainer>
  );
}

function HeaderMenuIcon({ navigation }) {
  const IsLargeScreen = useIsLargeScreen();
  const MenuIcon = <Icon.Button name="ios-menu" size={40} backgroundColor="#4E94B9" onPress={() => navigation.openDrawer()} />;

  return ({
    headerTitleAlign: styles.header.headerTitleAlign,
    headerTintColor: styles.header.headerTintColor,
    headerBackTitle: styles.header.headerBackTitle,
    headerTitleStyle: styles.header.headerTitleStyle,
    headerStyle: styles.header.headerStyle,
    headerLeft: () => (IsLargeScreen ? null : MenuIcon),
  });
}

// Style
const styles = {
  drawer: {
    backgroundColor: '#D2E6F1',
    width: 200,
  },
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
};
