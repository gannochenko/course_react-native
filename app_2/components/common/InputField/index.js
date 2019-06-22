import React from 'react';
import {func, object, array, oneOfType, string} from 'prop-types';
import {
    defaultTheme,
    InputFieldContainer,
    Label,
    Input,
} from './style';

const InputField = ({
    label,
    placeholder = '',
    secureTextEntry = false,
    children = null,
    theme = defaultTheme,
    onChangeText = () => {},
    onBlur = () => {},
    value,
}) => (
    <InputFieldContainer>
        <Label>
            {label}
        </Label>
        <Input
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={value}
            autoCorrect={false}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
        />
    </InputFieldContainer>
);

InputField.propTypes = {
    theme: object,
    children: oneOfType([func, object, array]),
    onChangeText: func,
    onBlur: func,
    value: string,
};

export { InputField };
