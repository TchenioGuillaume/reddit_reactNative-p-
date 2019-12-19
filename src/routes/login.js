import React, {Component} from 'react';
import {Text, TextInput, TouchableHighlight, View} from 'react-native';

import User from '../lib/user' ;

export default class Login extends Component {
    state = {
        login: '',
        password: '',
    };

    login() {
        User.login(this.state);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0, alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Page d'identification</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{textAlign: 'left'}}>Votre email</Text>
                    <TextInput
                        value={this.state.login}
                        onChangeText={login => this.setState({login})}
                        placeholder='Votre email'
                    />
                    <Text style={{textAlign: 'left'}}>Votre mot de passe</Text>
                    <TextInput
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        placeholder='Mot de passe'
                        secureTextEntry={true}
                    />
                    <TouchableHighlight onPress={() => this.login()}><Text>Identification</Text></TouchableHighlight>
                </View>
            </View>
        );
    }
}
