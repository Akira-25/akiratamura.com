import 'react-native-gesture-handler';

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import SimpleNotesCard from './simplenotes/SimpleNotesCard';

export default function Applications({ navigation }) {
  const handleGoTo = ({
    simpleNotes: () => { navigation.navigate('StackSimpleNotes'); },
    /* ここにアプリが増えていく */
    /*       .           */
    /*       .           */
    /*       .           */
  });

  return (
    <ScrollView style={styles.container}>
      <SimpleNotesCard onPress={handleGoTo.simpleNotes} />
      {/* ここにアプリが増えていく */}
      {/*       .           */}
      {/*       .           */}
      {/*       .           */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

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
