import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export function ImagePlaceholder() {
  return <View style={styles.root} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 16,
  },
});
