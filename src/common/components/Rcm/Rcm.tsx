import * as React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

interface IProps {
  error?: string;
  isEmpty?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
}

export function Rcm(props: IProps) {
  const { isLoading, error, isEmpty, children } = props;
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error! Reason: {error}</Text>
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  if (isEmpty) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Nothing here</Text>
      </View>
    );
  }
  return <>{children}</>;
}

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 24,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
