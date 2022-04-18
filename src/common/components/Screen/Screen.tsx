import * as React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { COMMON_STYLES } from '../../styles';

interface IProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function Screen({ children, style }: IProps) {
  return <View style={[styles.root, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    ...COMMON_STYLES.mh_1,
  },
});
