import 'react-native-gesture-handler';

import * as React from 'react';
import { View } from 'react-native';

import {
  Card, Title, Paragraph,
} from 'react-native-paper';

export default function CardComponent(props) {
  return (
    <View style={{ padding: 15 }}>

      <Card onPress={props.onPress}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Title>{props.title}</Title>
          <Paragraph>{props.paragraph}</Paragraph>
        </Card.Content>
      </Card>

    </View>
  );
}
