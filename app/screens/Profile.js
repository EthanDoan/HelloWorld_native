import React, { Component } from 'react';
import { AppRegistry, View, Button, Image, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile'
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.imageContainer} >
                    <Image
                        source={require('../../resource/kart1_price.jpg')}
                        style={styles.imageView}
                    >
                    </Image>
                </View>

                <View style={{ flex: 2 }}>
                    <Image
                        source={require('../../resource/d7.png')}
                        style={styles.imageView}
                    >
                    </Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        backgroundColor: 'green'
    },
    imageView: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
        resizeMode: 'contain'
    }
});
