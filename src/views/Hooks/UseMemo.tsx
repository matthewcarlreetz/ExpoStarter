import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function UseMemo() {
  return (
    <View style={styles.container}>
      <Text>UseMemo</Text>
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
