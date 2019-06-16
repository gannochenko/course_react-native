import React from 'react';
import { func, object, bool } from 'prop-types';
import { defaultTheme, CardContainer } from './style';

const Card = ({ children, theme }) => <CardContainer>{children}</CardContainer>;

Card.propTypes = {
    theme: object,
    children: object,
};

Card.defaultProps = {
    theme: defaultTheme,
    children: null,
};

export default Card;
