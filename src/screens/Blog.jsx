import 'react-native-gesture-handler';

import * as React from 'react';
import { Headline } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';// Text,

export default function Blog() {
  return (
    <View style={styles.container}>
      <Headline>Blog</Headline>
      <Headline>Comming soon</Headline>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
