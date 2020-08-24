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
      <Button text="Use Callback" onPress={() => navigation.navigate('UseCallback')}></Button>
      <Button text="Use Reducer" onPress={() => navigation.navigate('UseReducer')}></Button>
      <Button text="Use Context" onPress={() => navigation.navigate('UseContext')}></Button>
      <Button text="Use Memo" onPress={() => navigation.navigate('UseMemo')}></Button>
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
