import { StyleSheet } from 'react-native';
import { COMMON_STYLES } from '../../../../common/styles';

const styles = StyleSheet.create({
  root: {
    ...COMMON_STYLES.ph_2,
    flex: 1,
  },
  itemContainer: {
    ...COMMON_STYLES.mt_2,
    flex: 1,
  },
  scrollContainer: { ...COMMON_STYLES.scrollInnerContainer },
});

export default styles;
