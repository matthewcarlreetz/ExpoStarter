import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';

export default function UseState() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text>{`Count: ${count}`}</Text>

      <View style={styles.horizontalContainer}>
        <Button onPress={handleIncrement} text="Increment" />
        <Button onPress={handleReset} text="Reset" />
        <Button onPress={handleDecrement} text="Decrement" />
      </View>
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
  horizontalContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
