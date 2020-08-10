import 'react-native-gesture-handler';
import * as React from 'react';
import * as firebase from 'firebase/app';
// Librarys
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useLinking, NavigationContainer } from '@react-navigation/native';

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
import useIsWindow from './src/hooks/WindowDimensions';
// config screen indexx
import CONFIG from './src/screens/Config';
// firebase/firestore -------------------------------------------------
import ENV from './env.json';

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

require('firebase/firestore');
require('firebase/analytics');

firebase.initializeApp(firebaseConfig);
firebase.analytics();
//  -----------------------------------------------------------------------
function headerMenuIcon({ navigation }) {
  const openDrawer = () => navigation.openDrawer();
  return <Icon.Button name="ios-menu" size={30} backgroundColor="#4E94B9" onPress={openDrawer} />;
}
// StackNavigator -----------------------------------------------------------------------
const S = createStackNavigator();
const D = createDrawerNavigator();
// HomeStack -------------------------------------------------
function HomeStackNavigator({ navigation }) {
  const { isWideWindow } = useIsWindow();
  const headerLeft = () => (isWideWindow ? null : headerMenuIcon({ navigation }));
  return (
    <S.Navigator screenOptions={{ ...styles.header, headerLeft }}>
      <S.Screen name="HomeScreen" component={Home} options={{ title: 'Home' }} />
    </S.Navigator>
  );
}
// AboutStack -------------------------------------------------
function AboutStackNavigator({ navigation }) {
  const { isWideWindow } = useIsWindow();
  const headerLeft = () => (isWideWindow ? null : headerMenuIcon({ navigation }));
  return (
    <S.Navigator screenOptions={{ ...styles.header, headerLeft }}>
      <S.Screen name="AboutScreen" component={About} options={{ title: 'About' }} />
    </S.Navigator>
  );
}
// AppsStack -------------------------------------------------
function AppsStackNavigator({ navigation }) {
  const { isWideWindow } = useIsWindow();
  const headerLeft = () => (isWideWindow ? null : headerMenuIcon({ navigation }));
  return (
    <S.Navigator screenOptions={{ ...styles.header, headerLeft }}>
      <S.Screen name="AppsScreen" component={Applications} />
      <S.Screen name="StackSimpleNotes" component={StackSimpleNotes} options={{ title: 'SimpleNotes' }} />
    </S.Navigator>
  );
}
// Apps -------------------------------------------------
// ---SimpleNotes -------------------------------------------------
function StackSimpleNotes({ navigation }) {
  const { isWideWindow } = useIsWindow();
  const headerLeft = () => (isWideWindow ? null : headerMenuIcon({ navigation }));
  return (
    <S.Navigator screenOptions={{ ...styles.header, headerLeft }}>
      <S.Screen name="SimpleNotes" component={SimpleNotes} />
      <S.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </S.Navigator>
  );
}
//  ---------------------------------------------------------
function Drawers() {
  const { isWideWindow } = useIsWindow();
  const DrawerType = isWideWindow ? 'permanent' : 'back';
  return (
    <D.Navigator drawerType={DrawerType} drawerStyle={styles.drawer}>
      <D.Screen name="HomeDrawer" component={HomeStackNavigator} options={{ title: 'Home' }} />
      <D.Screen name="AboutDrawer" component={AboutStackNavigator} options={{ title: 'About' }} />
      <D.Screen name="AppsDrawer" component={AppsStackNavigator} options={{ title: 'Apps' }} />
    </D.Navigator>
  );
}
// DeepLink -------------------------------------------------
const prefix = Linking.makeUrl('/');
const config = CONFIG();
// export --------------------------------------------------
export default function App() {
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
      <Drawers />
    </NavigationContainer>
  );
}

// STYLES
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
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
    },
  },
};
