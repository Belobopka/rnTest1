import React, { useCallback, useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { imagePaths } from '../../../../../images';
import ImagePlaceholder from '../../../../common/components/ImagePlaceholder';
import { TExtendedPokemonData } from '../../slices/pokemonsSlice';
import styles from './styles';

interface IProps {
  item: TExtendedPokemonData;
  onPress?: (item: TExtendedPokemonData) => void;
}

export function PokemonListItem(props: IProps) {
  const { item, onPress } = props;
  const number = item.number;
  const imageUrl = useMemo(() => imagePaths[number], [number]);

  const handlePress = useCallback(() => onPress?.(item), [item, onPress]);

  const renderDescription = useCallback(
    () => (
      <View style={styles.text}>
        <Text>
          {number}. {item.name}
        </Text>
      </View>
    ),
    [number, item.name],
  );

  const renderImage = useCallback(
    () => (
      <View style={styles.imageContainer}>
        {imageUrl ? <Image resizeMode="contain" style={styles.image} source={imageUrl.path} /> : <ImagePlaceholder />}
      </View>
    ),
    [imageUrl],
  );

  const renderBody = useCallback(() => {
    return (
      <View style={styles.body}>
        {renderImage()}
        {renderDescription()}
      </View>
    );
  }, [renderDescription, renderImage]);

  const renderContainer = useCallback(() => {
    return <View style={styles.container}>{renderBody()}</View>;
  }, [renderBody]);

  const renderPressable = useCallback(() => {
    return (
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        {renderBody()}
      </TouchableOpacity>
    );
  }, [renderBody, handlePress]);

  return <View style={styles.root}>{onPress ? renderPressable() : renderContainer()}</View>;
}
