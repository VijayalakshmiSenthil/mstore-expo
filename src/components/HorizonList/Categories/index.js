/** @format */

import React, { PureComponent } from 'react';

import { withTheme } from '@common';

import CategoriesList from '../../../containers/Categories/CategoriesList';

class Categories extends PureComponent {
  static defaultProps = {
    items: [],
  };

  render() {
    const { items, type, onPress, config } = this.props;

    const column = typeof config.column !== 'undefined' ? config.column : 1;

    return (
      <>
      <CategoriesList/>
      </>
    );
  }
}

const styles = {
  flatlist: {
    marginBottom: 10,
  },
};

export default withTheme(Categories);
