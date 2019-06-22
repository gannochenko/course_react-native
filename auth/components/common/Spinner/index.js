import React from 'react';
import { func, object, bool, array, oneOfType } from 'prop-types';
import {
    defaultTheme,
    SpinnerContainer,
    Indicator,
} from './style';

const Spinner = ({
    children = null,
    theme = defaultTheme,
    size = 'large',
}) => (
  <SpinnerContainer>
      <Indicator size={size} />
  </SpinnerContainer>
);

Spinner.propTypes = {
    theme: object,
    children: oneOfType([func, object, array]),
};

export { Spinner };
