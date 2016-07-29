/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class IsRN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: 'hello'
        };
    }

    // 更改state中word的函数
    changeWord() {
        this.setState({
            word: 'world'
        });
    }

    render() {
        let pic = {
            uri: 'http://e.hiphotos.baidu.com/image/pic/item/cefc1e178a82b9016ece2b2c718da9773912ef4a.jpg'
            //http://static.apple.nextmedia.com/images/e-paper/20151017/large/1445078191_c5c9.jpg
        };
        // 点击时触发changeWord函数，更改状态
        return (

            <View style={styles.container} onTouchEnd={this.changeWord.bind(this)}>
                <Text style={styles.welcome}>
                    {this.state.word}
                </Text>
                <Image source={pic} style={{width: 500, height: 620}} />

            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// 注意，这里用引号括起来的'IsRN'必须和你init创建的项目名一致
AppRegistry.registerComponent('IsRN', () => IsRN);


class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

AppRegistry.registerComponent('Bananas', () => Bananas);