import 'react-native-gesture-handler';

import React from 'react';
import {
  ScrollView, View,
} from 'react-native';

import CardComponent from '../../components/Card';

export default function Applications({ navigation }) {
  return (
    <ScrollView>
      <View>

        <CardComponent
          onPress={() => { navigation.navigate('SimpleNotes'); }}
          title="SimpleNotes"
          paragraph="explanation about SN"
        />

        { /* <CardComponent
          onPress={() => { navigation.navigate('App2StackScreen'); }}
          title="App2"
          paragraph="explanation about App2"
        /> */ }

      </View>
    </ScrollView>
  );
}

/*
 style={styles.container}
 style={styles.aColumn}
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    padding: 30,
  },
  aColumn: {
    flexDirection: 'row', // 横並び
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#E31676',
    height: 48,
    borderRadius: 4,
    width: '70%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
*/

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
