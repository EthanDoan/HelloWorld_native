import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ListView, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation'


export default class ImageList extends Component {

    static navigationOptions = {
        title: 'Image List'
    };

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1,r2) => r1!=r2}),
            link: 'http://hardeepcoder.com/laravel/easyshop/api/products'
        }
    }

    componentDidMount() {
        fetch(this.state.link)
        .then((response) => response.json())
        .then((responseJson) => {
            data = responseJson;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data)
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { params } = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => 
                        <View>
                            <Text style={styles.elementName}>
                                {rowData.pro_name}
                            </Text>
                            <Image
                                style={{width: '100%', height: 250}}
                                source={{uri: rowData.pro_img}} 
                            />
                            <Text>
                                Price: {rowData.pro_price} VND
                            </Text>
                        </View>
                    }
                >
                </ListView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        marginRight: 10
    },

    elementName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 20,
        textAlign: 'center'
    }

});