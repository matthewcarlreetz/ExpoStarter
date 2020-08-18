import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../components/Button';

export default function UseEffect() {
  const [currentCount, setCurrentCount] = useState(1);
  const [prevCount, setPrevCount] = useState(0);
  const [fib, setFib] = useState(0);

  const handleIncrement = () => {
    const nextVal = currentCount + prevCount;
    setPrevCount(currentCount);
    setCurrentCount(nextVal);
  };

  const handleReset = () => {
    setCurrentCount(1);
    setPrevCount(0);
  };

  useEffect(() => {
    setFib(currentCount + prevCount);
  }, [currentCount, prevCount]);

  return (
    <View style={styles.container}>
      <Text>{fib}</Text>

      <View style={styles.horizontalContainer}>
        <Button onPress={handleIncrement} text="Increment" />
        <Button onPress={handleReset} text="Reset" />
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
