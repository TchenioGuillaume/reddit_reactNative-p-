import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class NavigationDrawerStructure extends Component {
    toggleDrawer() {
        this.props.navigationProps.toggleDrawer();
    };
    render() {
        return (
            <View style={{ flexDirection: 'row', marginLeft: 20, width: 80 }}>
                <TouchableOpacity onPress={() => this.toggleDrawer()} style={{ width: 60 }}>
                    <Icon name='bars' size={25} color='black' />
                </TouchableOpacity>
            </View>
        );
    }
}
