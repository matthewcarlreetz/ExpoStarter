import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button text="Use State" onPress={() => navigation.navigate('UseState')}></Button>
      <Button text="Use Effect" onPress={() => navigation.navigate('UseEffect')}></Button>
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
  button: { margin: 12, backgroundColor: 'red', padding: 12 },
  buttonText: { color: 'white' },
});
