import React from 'react';
import { func, object, bool, array, oneOfType } from 'prop-types';
import { defaultTheme, ButtonContainer, Text } from './style';

const Button = ({ children, theme, onPress }) => (
    <ButtonContainer onPress={onPress}>
        <Text>{children}</Text>
    </ButtonContainer>
);

Button.propTypes = {
    theme: object,
    children: oneOfType([func, object, array]),
    onPress: func.isRequired,
};

Button.defaultProps = {
    theme: defaultTheme,
    children: null,
};

export default Button;
