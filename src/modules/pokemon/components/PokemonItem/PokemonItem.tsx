import React, { useCallback, useMemo } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { imagePaths } from '../../../../../images';
import ImagePlaceholder from '../../../../common/components/ImagePlaceholder';
import { COMMON_STYLES } from '../../../../common/styles';
import { TPokemonData } from '../../slices/pokemonAPI';
import styles from './styles';

interface IProps {
  item: TPokemonData;
  number: string;
}

export function PokemonItem(props: IProps) {
  const { item, number } = props;
  const imageUrl = useMemo(() => imagePaths[number], [number]);
  const { name, id, height, weight, base_experience, types, stats } = item;
  const renderImage = useCallback(
    () => (
      <View style={styles.imageContainer}>
        {imageUrl ? <Image resizeMode="contain" style={styles.image} source={imageUrl.path} /> : <ImagePlaceholder />}
      </View>
    ),
    [imageUrl],
  );

  // TODO can be moved to typography common components
  const renderLabelText = useCallback(
    (text: string | string[]) => <Text style={[COMMON_STYLES.labelText]}>{text}</Text>,
    [],
  );
  const renderNormalLabelText = useCallback(
    (text: string | string[]) => <Text style={[COMMON_STYLES.labelTextBigNormal]}>{text}</Text>,
    [],
  );
  const renderDescriptionText = useCallback(
    (text: string | string[]) => <Text style={COMMON_STYLES.descriptionText}>{text}</Text>,
    [],
  );

  const renderInfo = useCallback(
    () => (
      <View style={styles.infoContainer}>
        {renderLabelText(name)}
        <Text>
          {renderLabelText('Id:')} {renderDescriptionText(id)}
        </Text>
        <Text>
          {renderLabelText('Types:')}{' '}
          {renderDescriptionText(
            types.map((pokemonType, index) => `${index > 0 ? ', ' : ''}${pokemonType?.type?.name}`),
          )}
        </Text>
      </View>
    ),
    [id, name, renderDescriptionText, renderLabelText, types],
  );

  const renderHead = useCallback(
    () => (
      <View style={styles.headContainer}>
        {renderImage()}
        {renderInfo()}
      </View>
    ),
    [renderImage, renderInfo],
  );
  const renderParams = useCallback(
    () => (
      <View style={styles.paramsContainer}>
        <Text>
          {renderLabelText('Height:')} {renderDescriptionText(height)}
        </Text>
        <Text style={COMMON_STYLES.mt_1}>
          {renderLabelText('Weight:')} {renderDescriptionText(weight)}
        </Text>
        <Text style={COMMON_STYLES.mt_1}>
          {renderLabelText('Base exp:')} {renderDescriptionText(base_experience)}
        </Text>
      </View>
    ),
    [base_experience, height, renderDescriptionText, renderLabelText, weight],
  );
  const renderStats = useCallback(
    () => (
      <View style={styles.statsContainer}>
        {renderLabelText('Stats:')}
        {stats.map(value => (
          <Text key={value.stat.name}>
            {renderNormalLabelText(value.stat.name)}: {renderDescriptionText(value.base_stat)}
          </Text>
        ))}
      </View>
    ),
    [renderDescriptionText, renderLabelText, renderNormalLabelText, stats],
  );
  return (
    <View style={styles.root}>
      <ScrollView>
        {renderHead()}
        {renderParams()}
        {renderStats()}
      </ScrollView>
    </View>
  );
}
