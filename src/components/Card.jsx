import 'react-native-gesture-handler';
import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';
// hooks
import useIsWindow from '../hooks/WindowDimensions';

// export
export default function CardComponent(props) {
  const {
    windowsHeight, windowsWidth, isTallWindow, isTooShortWindow,
  } = useIsWindow();

  const marginTop = (isTallWindow ? 30 : 20);
  const marginHorizontal = (windowsWidth * (isTooShortWindow ? 0.20 : 0.05));
  const height = (windowsHeight * (isTooShortWindow ? 0.40 : 0.25));

  const styles = StyleSheet.create({
    container: { flex: 1, marginTop, marginHorizontal },
    cardCover: { height },
  });
  // ---return---------------------------------------------------------
  return (
    <Card style={styles.container} onPress={props.onPress}>
      <Card.Cover style={styles.cardCover} source={props.source} />
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph>{props.paragraph}</Paragraph>
      </Card.Content>
    </Card>
  );
}

// -----------keep----------------
/*
const marginT = IsTallWindow ? 35 : 20;
const marginH = windowsWidth * (IsTooShortWindow ? 0.20 : 0.05);
const cardCoverHeight = windowsHeight * (IsTooShortWindow ? 0.40 : 0.25);
*/
