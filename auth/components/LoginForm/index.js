import React, { useState } from 'react';
import {func, object, array, oneOfType} from 'prop-types';
import { Card, CardSection, Button, InputField, Spinner } from '../common';
import { Formik } from 'formik';
import firebase from 'firebase';

import {
    defaultTheme,
    Error,
    LoginFormContainer,
} from './style';

const LoginForm = ({
    children = defaultTheme,
    theme = null,
    loggedIn,
}) => {
    const [ error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const handleAuth = async (values, { resetForm }) => {
        const { email, password } = values;
        const auth = firebase.auth();

        setError('');
        setLoading(true);

        let needSignUp = false;

        try {
            const signInResult = await auth.signInWithEmailAndPassword(email, password);
            // console.log(signInResult);
            resetForm({});
        } catch(signInError) {
            // console.log(signInError);
            needSignUp = true;
        }

        if (needSignUp) {
            try {
                const signUpResult = await auth.createUserWithEmailAndPassword(email, password);
                // console.log(signUpResult);
                resetForm({});
            } catch (signUpError) {
                // console.log(signUpError);
                setError('Authentication failed');
            }
        }

        setLoading(false);
    };

    if (loggedIn === null) {
        return (
            <Card>
                <CardSection>
                    <Spinner />
                </CardSection>
            </Card>
        );
    }

    if (loggedIn) {
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
                </CardSection>
            </Card>
        );
    }

    return (
       <Formik
           initialValues={{ email: '', password: '' }}
           onSubmit={handleAuth}
       >
           {props => (
               <Card>
                   <CardSection>
                       <InputField
                           label="Email"
                           placeholder="user@gmail.com"
                           onChangeText={props.handleChange('email')}
                           onBlur={props.handleBlur('email')}
                           value={props.values.email}
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
                   {
                       !!error
                       &&
                       <Error>
                           {error}
                       </Error>
                   }
                   <CardSection>
                       {
                           !loading
                           &&
                           <Button onPress={props.handleSubmit}>
                               Log in
                           </Button>
                       }
                       {
                           loading
                           &&
                           <Spinner />
                       }
                   </CardSection>
               </Card>
           )}
       </Formik>
    );
};

LoginForm.propTypes = {
    theme: object,
    children: oneOfType([func, object, array]),
};

export default LoginForm;
