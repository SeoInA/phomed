import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Button, Icon,Container,Body, Right, Left, Header } from 'native-base';

export default class SomethingScreen extends Component{

    render(){
        return (

          <Container style={styles.container}>

            <ScrollView>

                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                </View>

            </ScrollView>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius:50,
    }
})
