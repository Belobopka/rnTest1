import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COMMON_STYLES } from '../../styles';

export function BackArrow() {
  const navigation = useNavigation();
  const handleGoBack = React.useCallback(() => navigation.goBack(), [navigation]);
  return (
    <TouchableOpacity style={styles.root} onPress={handleGoBack}>
      <Text style={styles.arrow}>←</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    ...COMMON_STYLES.pb_1,
    width: 32,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  arrow: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
