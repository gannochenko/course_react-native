import React from 'react';
import {func, object, array, oneOfType} from 'prop-types';
import { Card, CardSection, Button, InputField } from '../common';
import { Formik } from 'formik';

import {
    defaultTheme,
    //LoginFormContainer,
} from './style';

const LoginForm = ({
   children = defaultTheme,
   theme = null,
}) => (
    <Formik
        initialValues={{ login: '', password: '' }}
        onSubmit={values => console.log(values)}
    >
        {props => (
            <Card>
                <CardSection>
                    <InputField
                        label="Email"
                        placeholder="user@gmail.com"
                        onChangeText={props.handleChange('login')}
                        onBlur={props.handleBlur('login')}
                        value={props.values.login}
                    />
                </CardSection>
                <CardSection>
                    <InputField
                        label="Password"
                        placeholder="&bull;&bull;&bull;&bull;&bull;"
                        onChangeText={props.handleChange('password')}
                        onBlur={props.handleBlur('password')}
                        value={props.values.password}
                        secureTextEntry
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={props.handleSubmit}>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        )}
    </Formik>
);

LoginForm.propTypes = {
    theme: object,
    children: oneOfType([func, object, array]),
};

export default LoginForm;
