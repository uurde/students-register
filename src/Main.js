import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './Reducers/Index';
import Router from './Router';

export default class Main extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBmjx0DF_AZIwIawKaspYAWaA2B2vk73TI",
            authDomain: "ogrencikayit-2b82f.firebaseapp.com",
            databaseURL: "https://ogrencikayit-2b82f.firebaseio.com",
            projectId: "ogrencikayit-2b82f",
            storageBucket: "ogrencikayit-2b82f.appspot.com",
            messagingSenderId: "1034259768938",
            appId: "1:1034259768938:web:536b4620d123ffa0510c13"
        });
    };
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <Router/>
                </View>
            </Provider>
        );
    }
}