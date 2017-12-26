import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image, StyleSheet, Text, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import TabFeed from './TabFeed'
import TabEvent from './TabEvent'
import TabSing from './TabSing'
import TabNotification from './TabNotification'
import TabProfile from './TabProfile'
import * as Icons from '../constants/icons'

var width = Dimensions.get('window').width
var menuIcon = Icons.SOURCE_ICON['icon_menu']

export default class MainTabNavigator extends Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Main Screen',
        headerLeft: 
            <TouchableOpacity>
                <Image 
                    style={{ width: width/10, height: 24, resizeMode: 'contain' }}
                    resizeMode='contain'
                    source={menuIcon}
                >
                </Image>
            </TouchableOpacity>,
        headerTintColor: 'purple',
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTitleStyle: {
            color: 'navy'
        }
    }

    render() {
        return(
            <MainTabScreen />
        );
    }
}

export const MainTabScreen = TabNavigator({
    TabFeed: { screen: TabFeed },
    TabEvent: { screen: TabEvent },
    TabSing: { screen: TabSing },
    TabNotification: { screen: TabNotification },
    TabProfile: { screen: TabProfile }
});
