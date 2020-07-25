import 'react-native-gesture-handler';

import * as React from 'react';
import { Headline, Paragraph } from 'react-native-paper';
import {
  StyleSheet, ScrollView, View,
} from 'react-native';// Text,

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Headline> Home </Headline>
        <Paragraph>
          {`
            このページは主に、
              -React Native Web
              -React Navigation v5
              -expo web
              -Firebase (FirebaseHosting)
            を使って作られています。
            Expo、ReactNative、Firebaseを使って、
            アプリやこのページをいじって遊んでいます。

            This web page was mainly built using,,
              -React Native Web
              -React Navigation v5
              -expo web
              and
              -Firebase (FirebaseHosting).
          `}
        </Paragraph>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
});
