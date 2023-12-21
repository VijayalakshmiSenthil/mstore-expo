/** @format */

import * as React from 'react';
import { useCallback, useEffect } from 'react';
import { ScrollView,SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Config, Constants, withTheme, Languages } from '@common';
import { BlockTimer, toast } from '@app/Omni';
import {
  Empty,
  LogoSpinner,
  SplitCategories,
  SubCategories,
  ColumnCategories,
} from '@components';

import * as CategoryRedux from '@redux/CategoryRedux';

import CategoriesList from './CategoriesList';

const CategoriesScreen = React.memo(
  ({ onViewProductScreen, background, onViewCategory }) => {
    const dispatch = useDispatch();

    const isConnected = useSelector(state => state.netInfo.isConnected);
    const error = useSelector(state => state.categories.error);
    const isFetching = useSelector(state => state.categories.isFetching);

    const fetchCategories = useCallback(() => {
      CategoryRedux.actions.fetchCategories(dispatch);
    }, [dispatch]);

    const setSelectedCategory = React.useCallback(
      cate => {
        dispatch(CategoryRedux.actions.setSelectedCategory(cate));
      },
      [dispatch],
    );

    const onRowClickHandle = React.useCallback(
      category => {
        BlockTimer.execute(() => {
          setSelectedCategory({
            ...category,
            mainCategory: category,
          });

          onViewCategory({ mainCategory: category });
        }, 500);
      },
      [onViewCategory, setSelectedCategory],
    );

    useEffect(() => {
      fetchCategories();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (error) {
        toast(error);
      }
    }, [error]);

    useEffect(() => {
      if (!isConnected) {
        toast(Languages.noConnection);
      }
    }, [isConnected]);

    
    if (Config.CategoriesLayout === Constants.CategoriesLayout.sideMenu) {
      return (
        <SplitCategories
          onViewPost={product => onViewProductScreen({ product })}
        />
      );
    }

    if (Config.CategoriesLayout === Constants.CategoriesLayout.column) {
      return <ColumnCategories onViewCategory={onRowClickHandle} />;
    }

    if (Config.CategoriesLayout === Constants.CategoriesLayout.topMenu) {
      return (
        <SubCategories
          onViewPost={product => onViewProductScreen({ product })}
        />
      );
    }

    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fff' }}>
        <ScrollView>
        <CategoriesList/>
        </ScrollView>
      </SafeAreaView>
      
    );
  },
);

export default withTheme(CategoriesScreen);
