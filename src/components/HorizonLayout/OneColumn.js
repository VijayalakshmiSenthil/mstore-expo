// BannerImage.js
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import { ImageCache, TouchableScale } from '@components';
import { Styles } from '@common';

export default class ColumnHigh extends PureComponent {
  render() {
    const { viewAll, config } = this.props;
    const column = config.column || 1;
    const height = config.height || 200;
    const resizeMode = config.imageMode || 'cover';

    const sectionWidth = (Styles.width / column - 20) / 2;

    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableScale onPress={viewAll} activeOpacity={1} style={styles.imageBannerView(column, height)}>
          <View style={{ width: sectionWidth }}>
            <ImageCache uri={config.imageBanner} style={styles.imageBanner(resizeMode)} />
          </View>
          <View style={{ width: sectionWidth, backgroundColor: 'rgb(255, 226, 248)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.text}>Women 18</Text>
            <Text> Grove X collection </Text>
            <Text style={styles.buttonText}>Shop now</Text>
          </View>
        </TouchableScale>
      </View>
    );
  }
}

const styles = {
  imageBannerView: (column, height) => ({
    flexDirection: 'row',
    width: Styles.width / column - 20,
    height,
    borderRadius: 0,
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
  text:{
    bottom: 40,

  },
  buttonText: {
    position: 'relative',
    color: 'black',
    fontSize: 12,
    fontFamily: 'OpenSans',
    padding: 8,
    top: 38,
    fontWeight: 'bold',
    backgroundColor: '#fff', 
    borderRadius: 15,
  }
};
