import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Login from './login'
import Register from './register'

import User from "../lib/user" ;

export default class LoginScreen extends Component {
    state = {
        loggin : true
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                { this.state.loggin ? <Login /> : <Register /> }
            </View>
        );
    }
}
