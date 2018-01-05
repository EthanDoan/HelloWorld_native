import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigation } from 'react-navigation';
import * as Icons from '../constants/icons';
import ImageList from './ImageList';

export default class TabEvent extends Component {
    
    static navigationOptions = {
        tabBarLabel: 'Event',
        tabBarIcon: () => (
            <Image
                style={{ width: 27, height: 27, resizeMode: 'contain' }}
                source={Icons.SOURCE_ICON['icon_event']}
                resizeMode='contain'
            >
            </Image>
        )
    }    
    
    render() {
        return(
            <ImageList style={{ flex: 1, backgroundColor: 'cyan' }}>
                
            </ImageList>
        );
    }
}