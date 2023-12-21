import * as React from 'react';
import PropTypes from 'prop-types';
import { Images } from '@common';

const ImageSet = React.useMemo(({category}) => {
    return category?.image
      ? { uri: category?.image.src }
      : Images.categoryPlaceholder;
  }, [category?.image]);

  ImageSet.propTypes = {
    style: PropTypes.any,
    uri: PropTypes.any,
  };

  export default ImageSet;
