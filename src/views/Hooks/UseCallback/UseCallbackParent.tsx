import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import UseCallback from './UseCallback';

export default function UseCallbackParent() {
  const [search, setSearch] = useState<string>('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setSearch(text);
        }}
      />
      <UseCallback searchTerm={search} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 12,
    flex: 1,
    padding: 12,
  },
  textInput: { height: 40, width: 120, borderColor: 'gray', borderWidth: 1 },
});
