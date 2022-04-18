import * as React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { IS_IOS } from '../../../constants';

interface IProps {
  onChangeText: (value: string) => void;
  value: string;
}

export function FindInput(props: IProps) {
  const { onChangeText, value } = props;

  const handleChange = React.useCallback(
    text => {
      onChangeText?.(text);
    },
    [onChangeText],
  );
  return (
    <View style={styles.root}>
      <TextInput style={styles.text} placeholder="Search" onChangeText={handleChange} value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 8,
    padding: IS_IOS ? 16 : 6,
  },
  text: {
    fontSize: 20,
  },
});
