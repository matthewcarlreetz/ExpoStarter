import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';

type Props = { onPress: (event: GestureResponderEvent) => void; text: string };

export default function Button({ onPress, text }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { borderColor: 'black', borderWidth: 1, margin: 12, padding: 12 },
  buttonText: { color: 'black' },
});
