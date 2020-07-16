import 'react-native-gesture-handler';

import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';// Text,
import { Headline } from 'react-native-paper';

export default function About() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Headline>Akira</Headline>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
  },
});
