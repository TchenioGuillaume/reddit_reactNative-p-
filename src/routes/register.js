import React, { Component } from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import User from "../lib/user" ;

export default class Register extends Component {
    register() {
        User.setState({email:'joe'})
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Création de compte</Text>
                <TouchableHighlight onPress={()=> {
                    this.register()
                }}><Text>Register</Text></TouchableHighlight>
            </View>
        );
    }
}
