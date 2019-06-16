import React from 'react';
import { func, object, oneOfType, array } from 'prop-types';
import { defaultTheme, CardSectionContainer } from './style';

const CardSection = ({ children, theme }) => (
    <CardSectionContainer>{children}</CardSectionContainer>
);

CardSection.propTypes = {
    theme: object,
    children: oneOfType([object, array, func]),
};

CardSection.defaultProps = {
    theme: defaultTheme,
    children: null,
};

export default CardSection;
