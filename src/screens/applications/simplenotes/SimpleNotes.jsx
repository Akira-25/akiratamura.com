import 'react-native-gesture-handler';

import * as React from 'react';
import { Headline, Text, Paragraph } from 'react-native-paper';
import {
  StyleSheet, ScrollView, TouchableOpacity, View,
} from 'react-native';// Text,

import GoBackBar from '../../../elements/GoBackBar';

export default function SimpleNotes({ navigation }) {
  const handleGoBack = () => navigation.navigate('AppsScreen');
  const handlePress = () => navigation.navigate('PrivacyPolicy');
  return (
    <View style={{ flex: 1 }}>
      <GoBackBar onPress={handleGoBack} />
      <ScrollView style={styles.container}>
        <Headline> SimpleNotes </Headline>
        <Paragraph>
          {`
            This is a simple notes App.
            The all of notes would be saved to the cloud system automaticaly.
          `}
        </Paragraph>
        <TouchableOpacity onPress={handlePress}>
          <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
            PrivacyPolicy
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
