
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Button, Icon,Container,Body, Right, Left, Header } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

export default class RegisterScreen extends Component{

    static navigationOptions = {
        header: null,
    };

    _doLogin(){
        // do something
        this.props.navigation.replace('Login')
    }

    render(){
        return (
          <Container style={styles.container}>
            <Header style={styles.header}>
                <Left><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Left>
                <Body><Text style={{ color:'white',fontSize:15,fontWeight:'bold'}}>Register</Text></Body>
                <Right><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text style={{ color:'white'}}> 🔙 Back </Text></TouchableOpacity></Right>
            </Header>
            <View style={styles.Form}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>회원가입</Text>
                </View>
                <View style={styles.formArea}>
                    <TextInput
                        style={styles.textForm}
                        placeholder={"Name"}/>
                    <TextInput
                        style={styles.textForm}
                        placeholder={"ID"}/>
                    <TextInput
                        style={styles.textForm}
                        placeholder={"Password"}/>
                    <TextInput
                        style={styles.textForm}
                        placeholder={"Password Check"}/>
                    <TextInput
                        style={styles.textForm}
                        placeholder={"Email"}/>
                    <TextInput
                        style={styles.textForm}
                        placeholder={"Gender"}/>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._doLogin.bind(this)}>
                        <Text style={styles.buttonTitle}>가입</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8888',

    },
    titleArea: {
        width: '100%',
        padding: wp('10%'),
        alignItems: 'center',
    },
    title: {
        fontSize: wp('10%'),
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%'),

    },
    Form :{
      paddingLeft: wp('10%'),
      paddingRight: wp('10%'),

    },
    header :{
      paddingLeft: wp('10%'),
      paddingRight: wp('7%'),
      backgroundColor:'black',
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 12,

        backgroundColor: 'white',
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
        marginBottom: 7,
    },
    formArea: {
        width: '100%',
        height: hp('5%'),
        marginBottom: 260,
    },
    button: {
        backgroundColor: "#FFE3E3",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'black',
    },
})
