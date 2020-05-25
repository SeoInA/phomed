
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

export default class RegisterScreen extends Component{

    static navigationOptions = {
        header: null,
    };

    /*
    _doLogin(){
        // do something
        this.props.navigation.replace('Login')
    }
    */
    constructor(props){
        super(props)

        this.state = {
            userID: '',
            passwd: '',
            name: '',
            gender: '',
            age: '',
            user_phone: '',
            responseMSG: ''
        }
    }
    
    
    UserRegistrationFunction = () =>{

        const userID = this.state.userID;
        const{passwd} = this.state;
        const{name} = this.state;
        const{gender} = this.state;
        const{age} = this.state;
        const{user_phone} = this.state;

    
        
        fetch('http://seongmindbphp.000webhostapp.com/register/register.php',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                userID: userID,
                passwd: passwd,
                name: name,
                gender: gender,
                age: age,
                user_phone: user_phone
            })
        }).then((response)=> response.json())
                .then((responseJson)=>{
                    /*responseMSG = JSON.stringify(responseJson);
                    responseMSG = responseMSG.replace('"','');
                    responseMSG = responseMSG.replace('"','');
                    responseMSG = responseMSG.trim();
                    */
                   this.setState({responseMSG: JSON.stringify(responseJson)},function(){
                    const responseMSG = this.state.responseMSG;
                    console.log(responseMSG);              
                    if(responseMSG.includes('Successful')){
                        this.props.navigation.navigate('Home');
                    }
                    else{
                        this.props.navigation.navigate('Register');
                    }
                   });
                    Alert.alert(responseJson);
                }).catch((error) =>{
                    console.error(error);
                });
        
        //this.enter_home();
        /*const responseMSG = this.state.responseMSG;
        console.log(responseMSG);              
        if(responseMSG.includes('Successful')){
            this.props.navigation.navigate('Home');
        }
        else{
            this.props.navigation.navigate('Register');
        }*/
                
    }
    
    /*
    enter_home(){
        const responseMSG = this.state.responseMSG;
        console.log(responseMSG);              
        if(responseMSG.includes('Successful')){
            this.props.navigation.navigate('Home');
        }
        else{
            this.props.navigation.navigate('Register');
        }
    }
    */

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
                        placeholder={"User ID :"}
                        onChangeText = {userID =>this.setState({userID})}/>
                    <TextInput
                        style={styles.textForm}
                        onChangeText = {passwd =>this.setState({passwd})}
                        secureTextEntry = {true}
                        placeholder={"Password :"}/>
                    <TextInput
                        style={styles.textForm}
                        onChangeText = {name =>this.setState({name})}
                        placeholder={"Name :"}/>
                    <TextInput
                        style={styles.textForm}
                        onChangeText = {gender =>this.setState({gender})}
                        placeholder={"Gender :"}/>
                    <TextInput
                        style={styles.textForm}
                        onChangeText = {age =>this.setState({age})}
                        placeholder={"Age :"}/>
                    <TextInput
                        style={styles.TextInputStyleClass}
                        onChangeText = {user_phone =>this.setState({user_phone})}
                        placeholder={"Phone Number(without '-') :"}/>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.UserRegistrationFunction}>
                        <Text style={styles.buttonTitle}>가입</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    TextInputStyleClass: {
        textAlign: 'center',
        marginBottom: 7,
        height:40,
        borderWidth: 1,

        borderColor: '#2196F3',

        borderRadius: 5,
    },

    MainContainer:{
        justifyContent:'center',
        flex:1,
        margin:10
    },
    
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin:1
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
        marginBottom: 300,
    },
    button: {
        backgroundColor: "#46c3ad",
        marginTop: 10,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'black',
    },
})
