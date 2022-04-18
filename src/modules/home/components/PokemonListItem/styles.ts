import { StyleSheet } from 'react-native';
import { COMMON_STYLES } from '../../../../common/styles';

const styles = StyleSheet.create({
  root: {
    height: 150,
    width: '100%',
  },
  body: {
    ...COMMON_STYLES.pv_2,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderWidth: 1,
    borderRadius: 16,
  },
  container: {
    ...COMMON_STYLES.ph_1,
    ...COMMON_STYLES.pv_1,
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    ...COMMON_STYLES.ml_1,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 16,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  text: {
    ...COMMON_STYLES.ml_2,
  },
});

export default styles;
