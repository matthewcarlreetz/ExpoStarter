import React, { useCallback } from 'react';
import { GestureResponderEvent } from 'react-native';
import List from './List';

export default function UseCallback({ searchTerm }: { searchTerm: string }) {
  const handleClick = useCallback(
    (event: GestureResponderEvent) => {
      // When searchTerm's length is greater than 4, useCallback() no longer returns the same function instance.
      console.log('You clicked ', event.target.toString());
    },
    [searchTerm.length > 4],
  );
  return <List searchTerm={searchTerm} handleClick={handleClick} />;
}
