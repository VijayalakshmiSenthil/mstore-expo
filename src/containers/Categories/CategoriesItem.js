/** @format */

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { TouchableScale } from '@components';
import { Images } from '@common';
import { BlockTimer } from '@app/Omni';
import * as CategoryRedux from '@redux/CategoryRedux';


const CategoriesItem = React.memo(({ category, index }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const imageCategory = React.useMemo(() => {
    return category?.image
      ? { uri: category?.image.src }
      : Images.categoryPlaceholder;
  }, [category?.image]);

  const setSelectedCategory = React.useCallback(
    cate => {
      dispatch(CategoryRedux.actions.setSelectedCategory(cate));
    },
    [dispatch],
  );

  const onRowClickHandle = React.useCallback(() => {
    BlockTimer.execute(() => {
      setSelectedCategory({
        ...category,
        mainCategory: category,
      });

      navigate('CategoryScreen', { mainCategory: category });
    }, 500);
  }, [category, navigate, setSelectedCategory]);

  if (!category) return null;

  return (
       <View style={[styles.imageView]}>
        <TouchableScale onPress={onRowClickHandle}>
        <Image style={styles.imageBanner} source={imageCategory} />
        <Text style={styles.buttonText}>{category.name.replace(/&amp;/g, '&')}</Text>
        </TouchableScale>
        </View>       
  );
});
const styles = {
  imageView: {
    marginBottom: 16,
    borderRadius: 8,
  },
  imageBanner: {
    flex: 1,
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  buttonText: {
    position: 'absolute',
    color: 'black',
    fontSize: 12,
    fontFamily: 'OpenSans',
    padding: 8,
    fontWeight: 'bold',
    bottom: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', 
    borderRadius: 15,
  },
};


export default CategoriesItem;
