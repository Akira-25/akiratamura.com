import 'react-native-gesture-handler';

import * as React from 'react';
import { Headline, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';// Text,

export default function SimpleNotes({ navigation }) {
  return (
    <View style={styles.container}>
      <Headline>SimpleNotes</Headline>
      <Text onPress={() => navigation.navigate('PrivacyPolicy')}>
        PrivacyPolicy
      </Text>

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
