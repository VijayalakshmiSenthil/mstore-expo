/** @format */

import React, { PureComponent } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, I18nManager, ImageBackground } from 'react-native'; // Import ImageBackground
import { connect } from 'react-redux';
import AppIntroSlider from 'react-native-app-intro-slider';


import { Config } from '@common';
import styles from './styles';

class AppIntro extends PureComponent {
  _renderItem = props => {
    const { item } = props;

    return (
      <ImageBackground
        source={item.image} // Set the source of your background image
        style={[
          styles.mainContent,
          {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer,
            width: props.width,
            height: props.height,
          },
        ]}
      >
        <Ionicons
          style={{ backgroundColor: 'transparent' }}
          name={item.icon}
          size={200}
          color="white"
        />
      </ImageBackground>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name={
            I18nManager.isRTL ? 'arrow-back-outline' : 'arrow-forward-outline'
          }
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
          style={{ backgroundColor: 'transparent' }}
        />
      </View>
    );
  };

  render() {
    return (
      <AppIntroSlider
        data={Config.intro}
        renderItem={this._renderItem}
        renderDoneButton={this._renderDoneButton}
        renderNextButton={this._renderNextButton}
        onDone={this.props.finishIntro}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { actions } = require('@redux/UserRedux');
  return {
    finishIntro: () => dispatch(actions.finishIntro()),
  };
};

export default connect(null, mapDispatchToProps)(AppIntro);
