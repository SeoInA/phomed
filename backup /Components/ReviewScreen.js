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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class ReviewScreen extends Component{
    render(){
        return (
          <Container style={styles.container}>

            <Header>
                  <Left><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ paddingRight:10 }} /></TouchableOpacity></Left>
                  <Body><Text>MyPage</Text></Body>
                  <Right></Right>
            </Header>
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
        padding: wp('5%'),
        backgroundColor: 'white',
    },
    wrapContent: {
        width: wp('90%'),
        height: wp('90%'),
        paddingBottom: wp('5%'),

    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#46c3ad",
    }
})
