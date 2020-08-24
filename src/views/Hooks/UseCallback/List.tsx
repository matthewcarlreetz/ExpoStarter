import React, { memo } from 'react';
import useSearch from '../useSearch';
import Button from '../../../components/Button';
import { View, GestureResponderEvent } from 'react-native';
import { usePrevious } from '../usePrevious';

type Props = { searchTerm: string; handleClick: (event: GestureResponderEvent) => void };

function List({ searchTerm = 'bacon', handleClick }: Props) {
  const previousClick = usePrevious(handleClick);

  console.log('previousClick === handleClick  ', previousClick === handleClick);

  const items = useSearch(searchTerm);

  const itemToElement = (item: string) => <Button onPress={handleClick} text={item} key={item} />;

  return <View>{items.map(itemToElement)}</View>;
}

export default memo(List);
