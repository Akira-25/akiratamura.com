import 'react-native-gesture-handler';

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function GoBackBar(props) {
  return (
    <View style={styles.appbar}>
      <View style={styles.iconContainer}>
        <Icon.Button
          name="arrowleft"
          size={18}
          color="grey"
          backgroundColor="white"
          onPress={props.onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    top: 0,
    left: 0,
    right: 0,
    height: 40,
    paddingTop: 0,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 10,
  },
  iconContainer: {
    top: 3,
    left: 0,
    width: 40,
    height: 30,
  },
});
