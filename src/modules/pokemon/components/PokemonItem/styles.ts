import { StyleSheet } from 'react-native';
import { COMMON_STYLES } from '../../../../common/styles';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headContainer: {
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    ...COMMON_STYLES.ml_1,
  },
  imageContainer: {
    height: 170,
    width: 170,
    borderWidth: 1,
    borderRadius: 16,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  paramsContainer: {
    ...COMMON_STYLES.mt_2,
  },
  statsContainer: {
    ...COMMON_STYLES.mt_2,
  },
});

export default styles;
