import React, { createContext, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Counter = { count: number };
const AppContext = createContext<Counter>({ count: 0 });

const MyRoundedView = () => {
  const { count } = useContext(AppContext);
  return (
    <View style={styles.roundContainer}>
      <Text>{count}</Text>
    </View>
  );
};

const UseContext = () => {
  return (
    <AppContext.Provider value={{ count: 123 }}>
      <View style={styles.root}>
        <MyRoundedView />
      </View>
    </AppContext.Provider>
  );
};

export default UseContext;

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  roundContainer: {
    margin: 16,
    borderRadius: 20,
    padding: 16,
    backgroundColor: '#ff0000',
  },
});
