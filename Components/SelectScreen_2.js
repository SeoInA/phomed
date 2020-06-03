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

export default class SelectScreen_2 extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header style={{padding: wp('5%'),backgroundColor:'black'}}>
                  <Left style={{marginLeft: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Left>
                  <Body><Text style={{fontWeight:'bold',color:'white'}}>SELECT</Text></Body>
                  <Right style={{marginRight: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name='ios-key' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Right>
            </Header>
            <ScrollView>

              <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.container}>

                  <View flexDirection="row">
                    <CardView
                      cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={5}
                      style={styles.card}
                    >
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Location')}><Image resizeMode='contain' style={{ paddingRight:10, width:120 , height:200 }} source={require('./img/locate.jpg')}/></TouchableOpacity>
                      <Text style={styles.text}>당신의 위치에 따라</Text>
                      <Text style={styles.text}>약국을 알려드릴까요?</Text>
                    </CardView>
                    <CardView
                      cardElevation={1}
                      cardMaxElevation={1}
                      cornerRadius={5}
                      style={styles.card}
                    >
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Time')}><Image resizeMode='contain' style={{ paddingRight:10, width:130 , height:200 }} source={require('./img/time.jpg')}/></TouchableOpacity>
                      <Text style={styles.text}>당신이 원하는 시간에 따라</Text>
                      <Text style={styles.text}>약국을 알려드릴까요?</Text>
                    </CardView>
                  </View>

                </View>

              </SafeAreaView>
            </ScrollView>
            <Body style={{backgroundColor:'black',width:'100%',height:hp('8%')}}>
              <View >
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Result')}>
                    <Text style={{marginTop:15,width:50,color:'white',fontWeight:'bold'}}>Next</Text>
                </TouchableOpacity>
              </View>
            </Body>
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
      height:hp('50%'),
      margin: 10,
      marginTop:100
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
