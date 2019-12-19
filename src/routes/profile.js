import React, { Component } from 'react';
import {Text, TouchableHighlight, View} from 'react-native';

import User from "../lib/user" ;

export default class Profile extends Component {
    state = {
        user : {}
    };
    constructor(props) {
        super(props);
        this.state.user = User.state ;
    }
    componentDidMount() {
        let me = this ;
        User.onChange((newState, previous) => {
            me.setState({user : newState})
        })
    }

    logout() {
        User.clear()
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Profile de {this.state.user && this.state.user.email ? this.state.user.email : 'not logged'}</Text>
                <TouchableHighlight onPress={()=> { this.logout() }}>
                    <Text>LogOut</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
