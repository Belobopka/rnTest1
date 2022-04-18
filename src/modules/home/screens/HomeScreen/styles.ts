import { StyleSheet } from 'react-native';
import { COMMON_STYLES } from '../../../../common/styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    ...COMMON_STYLES.ph_2,
    paddingVertical: 8,
  },
  findContainer: { paddingHorizontal: 30, ...COMMON_STYLES.mt_2 },
  title: {},
  titleText: {
    fontWeight: '600',
    textAlign: 'center',
    color: 'red',
    fontSize: 24,
  },
});

export default styles;
