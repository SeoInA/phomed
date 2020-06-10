
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
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
    constructor(props){
        super(props)

        this.state = {
            userID: '',
            passwd: '',
            responseMSG: '',
            institutionID:this.props.navigation.getParam('institutionID','institutionID')
        }
    }

    _doRegist(){
        // do something
        this.props.navigation.replace('Register')
    }


    UserLoginFunction = () =>{

        const userID = this.state.userID;
        const{passwd} = this.state;

        fetch('http://localhost:8000/login.php',{
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
                    //responseMSG = responseJson;
                    //responseMSG = responseMSG.replace('"','');
                    //responseMSG = responseMSG.replace('"','');
                    //responseMSG = responseMSG.trim();
                    //data_retrieve(responseJson);
                    this.setState({responseMSG: JSON.stringify(responseJson)},function(){
                        const responseMSG = this.state.responseMSG;
                        console.log(responseMSG);
                        if(responseMSG.includes('Successful')){
                            this.props.navigation.navigate('Write',{userID: this.state.userID,institutionID:this.state.insitutionID});
                        }
                        else{
                            this.props.navigation.navigate('Login');
                        }
                       });
                    Alert.alert(responseJson);
                }).catch((error) =>{
                    console.error(error);
                });
        /*
        function data_retrieve(data){
            //this.state.responseMSG = JSON.stringify(data);
            this.setState({responseMSG: JSON.stringify(data)})
        }
        */

        /*
        const responseMSG = this.state.responseMSG;

        var UserExistMSG = "L";
        console.log(responseMSG);
        if(responseMSG.length){
            this.props.navigation.navigate('TabNavigator');
        }
        */


    }

    render(){
        return (
          <Container style={styles.container}>
            <Header style={styles.header}>
                <Left><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Left>
                <Body><Text style={{ color:'white',fontSize:15,fontWeight:'bold'}}>LogIn</Text></Body>
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
                        secureTextEntry = {true}
                        onChangeText = {passwd =>this.setState({passwd})}/>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.UserLoginFunction.bind(this)}>
                        <Text style={styles.buttonTitle}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this._doRegist.bind(this)}>
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
        backgroundColor: '#FF8888',

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
      backgroundColor:'black',

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
        backgroundColor: 'white',
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
