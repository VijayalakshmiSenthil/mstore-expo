/** @format */

import React, { PureComponent } from 'react';
import { View, Text, Image, Dimensions} from 'react-native';
import { TouchableScale } from '@components';
import { Styles, Images } from '@common';
const { width } = Dimensions.get('window');
  const columnWidth = width * .5 -30;

const Row = ({ title, description, imageSource }) => (
<View style={{ marginHorizontal: 20, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc', justifyContent: 'center', alignItems: 'center', height: 150 }}>
<View style={[{flexDirection: 'column'}, { width: columnWidth }]}>
    <Image
        source={imageSource}
        style={[Styles.icon, { tintColor: 'black' }]}
      />
    </View>
    <View style={[{flexDirection: 'column'}, {alignItems: 'center'}, { width: columnWidth }]}>
    <Text style={styles.line1}>{title}</Text>
      <Text style={styles.line2}>{description}</Text> 
    </View>
  </View>
);

export default class TwoColumn extends PureComponent {
  render() {
    const {  config } = this.props;
    const height = config.height || 600;
    
    return (
      <TouchableScale activeOpacity={1} style={styles.imageBannerView(height)}>
        <Row title="Precious" description="Silver Never Loses Value." imageSource={Images.IconCheck}  />
        <Row title="Affordable" description="Precious Design Bargain Price." imageSource={Images.IconMoney}  />
        <Row title="Safe" description="All our Jewellery is hypoallergenic" imageSource={Images.IconHeart} />
        <Row title="Secure Checkout" description="100% secured checkout process" imageSource={Images.IconLock}  />
      </TouchableScale>
    );
  }
}


const styles = {
  imageBannerView: (height) => ({
    width: Styles.width - 20,
    height,
    borderRadius: 9,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  }),
  line1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  line2: {
    fontSize: 14,
    color: '#abb8c3'
  },
  
};