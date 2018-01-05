import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import * as Icons from '../constants/icons'

export default class TabProfile extends Component {

    static navigationOptions = {
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
            <Image
                style={{ width: 27, height: 27, resizeMode: 'contain' }}
                source={Icons.SOURCE_ICON['icon_profile']}
                resizeMode='contain'
            >
            </Image>
        )
    }

    render() {
        return(
            <View>
                
            </View>
        );
    }
}