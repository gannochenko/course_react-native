import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

const App = () => {

    useEffect(() => {
        firebase.initializeApp({
            apiKey: "AIzaSyAmnRm93RfnlcSv8oyPVnJ9DmPxcQsHyfU",
            authDomain: "course-rn-auth.firebaseapp.com",
            databaseURL: "https://course-rn-auth.firebaseio.com",
            projectId: "course-rn-auth",
            storageBucket: "",
            messagingSenderId: "336778574202",
            appId: "1:336778574202:web:05fad068f95f931f"
        });
    }, []);

    return (
        <View>
            <Header />
            <LoginForm />
        </View>
    );
};

export default App;

