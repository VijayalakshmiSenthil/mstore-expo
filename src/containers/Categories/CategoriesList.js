/** @format */

import * as React from 'react';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';


import CategoriesItem from './CategoriesItem';
import { View } from 'react-native-animatable';

const CategoriesList = React.memo(() => {
  const categoryList = useSelector(state =>
    state.categories.list?.filter(category => category.parent === 0),
  );

  const { width } = Dimensions.get('window');
  const columnWidth = width * .5 -30;
  

  // remove duplicate item
  const mainCategories = React.useMemo(
    () => [...new Map(categoryList.map(item => [item.id, item])).values()],
    [categoryList],
  );
  return (
      <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',margin:20}}>
      {mainCategories?.map((category, index) => {
        return (
          <View style={[style.imageBannerView, { width: columnWidth }]}>
          <CategoriesItem
              key={index.toString()}
              index={index}
              category={category}
            />
          </View>
        );
      })}
      </View>
    
  );
});
const style = {
  imageBannerView: {
    margin: 0 ,
  },}

export default CategoriesList;
