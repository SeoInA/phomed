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

            <Header style={{backgroundColor:'black'}}>
                  <Left style={{marginLeft: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{color:'white', paddingRight:40 }} /></TouchableOpacity></Left>
                  <Body><Text style={{color:'white', fontWeight:'bold',fontSize:15}}>MyPage</Text></Body>
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
        backgroundColor: 'pink',
    },
    wrapContent: {
        width: wp('100%'),
        height: wp('90%'),
        padding: wp('5%'),

    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius:50,
    }
})
