import React from 'react';
import { object, oneOfType, array, func } from 'prop-types';
import { defaultTheme, CardContainer } from './style';

const Card = ({ children, theme }) => <CardContainer>{children}</CardContainer>;

Card.propTypes = {
    theme: object,
    children: oneOfType([object, array, func]),
};

Card.defaultProps = {
    theme: defaultTheme,
    children: null,
};

export default Card;
