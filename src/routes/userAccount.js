import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AsyncStorage from '@react-native-community/async-storage';


import User from "../lib/user" ;
import LoginScreen from './loginScreen';
import Profile from './profile';

export default class UserAccount extends Component {
    state = {
        logged : false
    };
    componentDidMount() {
        let me = this ;
        User.onChange((newState, previous) => {
            me.setState({user : newState, logged : !!newState.email})
        })

    }
    render() {
        return (
            <>
                <Header containerStyle={{flex: 0, height:60, paddingTop:0}}
                        backgroundColor='#FF4300'
                        leftComponent={<Icon onPress={() => this.props.navigation.goBack()} name='arrow-left' size={25} color='black' style={{marginLeft: 10}}/>}
                        centerComponent={<Text style={{fontSize:25, fontWeight:'bold'}}>Mon compte</Text>}
                />
                <View style={{flex: 1, backgroundColor:'#FF430020'}}>
                    {this.state.logged ? <Profile /> : <LoginScreen /> }
                </View>
            </>
        );
    }
}
