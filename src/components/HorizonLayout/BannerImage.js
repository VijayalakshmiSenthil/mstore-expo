// BannerImage.js
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { ImageCache, TouchableScale } from '@components';
import { Styles } from '@common';


export default class BannerImage extends PureComponent {
  
  render() {
    const { viewAll, config } = this.props;
    const column = config.column || 1;
    const height = config.height || 200;
    const resizeMode = config.imageMode || 'cover';
    const text = "Best Silver for the \n Best Moments"
    return (
        <View >
          <TouchableScale onPress={viewAll} activeOpacity={1} style={styles.imageBannerView(column, height)}>
          <ImageCache uri={config.imageBanner} style={styles.imageBanner(resizeMode)} />
          <Text style={styles.bannertxt}>{text}</Text>
          </TouchableScale>
        </View>
      
    );
  }
}

const styles = {
  imageBannerView: (column, height) => ({
    width: Styles.width / column - 20,
    height,
    borderRadius: 9,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
  }),
  imageBanner: (resizeMode) => ({
    flex: 1,
    resizeMode,
  }),
  bannertxt: {
    position: 'absolute',
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    top: 40,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
};
