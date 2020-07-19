import 'react-native-gesture-handler';

import React from 'react';

import CardComponent from '../../../components/Card';
import Icon from './icon.png';

export default function SimpleNotesCard(props) {
  return (
    <CardComponent
      source={{ uri: Icon }}
      title="SimpleNotes"
      paragraph="Simple notes App!"
      onPress={props.onPress} // from Applications.jsx
    />
  );
}
