import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
  import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate('UseState')}>
        <Text style={styles.buttonText}>Use State</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    flex: 1
  },
  button: { margin: 12, backgroundColor: 'red', padding: 12 },
  buttonText: { color: 'white' }
});
