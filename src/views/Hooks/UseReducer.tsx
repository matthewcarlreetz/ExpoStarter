import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function UseReducer() {
  return (
    <View style={styles.container}>
      <Text>const [state, dispatch] = useReducer(reducer, initialState, init)</Text>
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
