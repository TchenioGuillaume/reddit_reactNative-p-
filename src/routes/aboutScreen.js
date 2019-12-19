import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text onPress={() => this.props.navigation.toggleDrawer() }>A propos</Text>
            </View>
        );
    }
}
