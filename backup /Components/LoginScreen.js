
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

export default class LoginScreen extends Component{

    static navigationOptions = {
        header: null,
    };

    /*
    _doLogin(){
        // do something
        this.props.navigation.replace('TabNavigator')
    }
    */

    /*
    _doRegist(){
        // do something
        this.props.navigation.replace('Register')
    }
    */

    /*
    UserLoginFunction = () =>{

        const userID = this.state.userID;
        const{passwd} = this.state;
        

        fetch('http://seongmindbphp.000webhostapp.com',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                userID: userID,
                passwd: passwd
            })
        }).then((response)=> response.json())
                .then((responseJson)=>{
                    
                    Alert.alert(responseJson);
                }).catch((error) =>{
                    console.error(error);
                });
        
        var UserExistMSG = 'Login successful';
        if(response.equals(UserExistMSG)){
            this.props.navigation.navigate('TabNavigator');
        }
                
    }
    */
    render(){
        return (
          <Container style={styles.container}>
            <Header style={styles.header}>
                <Left><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ paddingRight:10 }} /></TouchableOpacity></Left>
                <Body><Text>LogIn</Text></Body>
                <Right></Right>
            </Header>
            <View style={styles.Form}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>로그인</Text>
                </View>
                <View style={styles.formArea}>
                    <TextInput
                        style={styles.textForm}
                        placeholder={"ID"}
                        onChangeText = {userID =>this.setState({userID})}/>
                    <TextInput
                        style={styles.textForm}
                        placeholder={"Password"}
                        onChangeText = {passwd =>this.setState({passwd})}/>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.UserLoginFunction}>
                        <Text style={styles.buttonTitle}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.props.navigation.replace('Register')}>
                        <Text style={styles.buttonTitle}>회원가입</Text>
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
        backgroundColor: 'white',

    },
    titleArea: {
        width: '100%',
        padding: wp('10%'),
        alignItems: 'center',
    },
    title: {
        fontSize: wp('10%'),
        marginBottom: 8,
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
      paddingRight: wp('10%'),
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('6%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 20,
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
        marginBottom: 10,
    },
    formArea: {
        width: '100%',
        height: hp('5%'),
        marginBottom: 100,
    },
    button: {
        backgroundColor: "#46c3ad",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },
})
