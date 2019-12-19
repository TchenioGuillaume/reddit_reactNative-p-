import React from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';


import HomeScreen from './src/routes/homeScreen' ;
import LoginScreen from './src/routes/loginScreen' ;
import UserProfile from './src/routes/userAccount' ;
import DetailPost from './src/routes/detailPost' ;
import AboutScreen from './src/routes/aboutScreen' ;
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';

import User from "./src/lib/user" ;


const MenuElement = (route, screen, title, label) => {
    return {
        screen: createStackNavigator({
            [route]: {
                screen: screen,
                navigationOptions: ({navigation}) => ({
                    title : title,
                    headerLeft : <Icon onPress={() => navigation.toggleDrawer()} name='bars' size={25} color='black' style={{marginLeft:10}} />,
                    headerRight : <Icon onPress={() => navigation.navigate('Account')} name='user-cog' size={25} color='black' style={{marginRight:10}} />,
                    headerStyle: {
                        backgroundColor: '#FF4300',
                    },
                })
            }
        }),
        navigationOptions: ({navigation}) => ({
            drawerLabel : label
        }),
    }
} ;

const routes = {
    Home: MenuElement('Home', HomeScreen, 'Bienvenue sur IT-Reddit', 'Accueil'),
    Page: MenuElement('Page', AboutScreen, 'ma seconde page', 'Page 2'),
    About: MenuElement('About', AboutScreen, 'A propos de IT-Reddit', 'A propos'),
};

const AppNavigator = createDrawerNavigator(routes, {
    drawerBackgroundColor : '#FFC'
});


const _Routes = {
    Home: {screen:AppNavigator},
    Page: {screen:AppNavigator},
    About: {screen:AppNavigator},
    Account : {
        screen : UserProfile
    },
    DetailPost : {
        screen : DetailPost
    },
};
 const _AppNavigator = createStackNavigator(_Routes, {
     headerMode:'none'
 })

export default createAppContainer(_AppNavigator);
