import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export function SafeAreaWrapper({ children }: React.PropsWithChildren<any>) {
  return <SafeAreaView style={styles.root}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
