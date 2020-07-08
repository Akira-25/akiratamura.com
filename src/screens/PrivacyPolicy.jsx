import 'react-native-gesture-handler';

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';

export default function PrivacyPolicy() {
  return (
    <View style={styles.container}>
      <Headline>
        {`
          Privacy Policy
          Coming soon...
        `}
      </Headline>
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
