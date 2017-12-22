import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { AppRegistry, View, Button, Image } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome'
    };
  
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to Profile"
          onPress={
            () => navigate('Profile', { name: 'Jane' })
          }
        />
      );
    }
  }
