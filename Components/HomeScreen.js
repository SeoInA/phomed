import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native';
import { Button, Icon,Container,Body, Right, Left, Header } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CardView from 'react-native-cardview';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header style={{backgroundColor:'black'}}>
                  <Left style={{marginLeft: 20}}><Icon name='ios-home' style={{ color:'white',paddingLeft:10 }}/></Left>
                  <Body><Text style={{color:'white', fontWeight:'bold',fontSize:15}}>Home</Text></Body>
                  <Right style={{marginRight: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name='ios-key' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Right>
            </Header>
            <ScrollView>

              <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.container}>
                  <View style={{marginTop: 40}}>
                    <Text style={styles.head_text}>당신이 찾고 있는 장소는</Text>
                    <Text style={styles.head_text}>병원인가요? 약국인가요?</Text>
                  </View>
                  <View flexDirection="row">
                    <CardView
                      cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={5}
                      style={styles.card}
                    >
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Select')}><Image resizeMode='contain' style={{ paddingRight:10, width:120 , height:200 }} source={require('./img/01.jpg')}/></TouchableOpacity>
                      <Text style={styles.text}>병원</Text>
                    </CardView>
                    <CardView
                      cardElevation={1}
                      cardMaxElevation={1}
                      cornerRadius={5}
                      style={styles.card}
                    >
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Select_2')}><Image resizeMode='contain' style={{ paddingRight:10, width:130 , height:200 }} source={require('./img/02.jpg')}/></TouchableOpacity>
                      <Text style={styles.text}>약국</Text>
                    </CardView>
                  </View>

                </View>
              </SafeAreaView>
            </ScrollView>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF8888',
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
    },
    wrapButton: {
        width: wp('100%'),
        height: hp('8%'),
        paddingLeft: wp('8%'),
        justifyContent: 'center',
        borderBottomWidth: 0.5,
        borderColor: '#ccc',
    },
    safeAreaView: {
      flex: 1
    },
    card: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      flex: 1,
      margin: 10,
      marginTop:50
    },
    head_text :{
      textAlign:'center',
      fontWeight:'bold',
      fontSize:30,
    },
    text: {
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
})
