import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function UseCallback() {
  return (
    <View style={styles.container}>
      <Text>UseCallback</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    flex: 1,
  },
});
