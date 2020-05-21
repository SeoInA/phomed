import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { Button, Icon,Container,Body, Right, Left, Header } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CardView from 'react-native-cardview';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header>
                  <Left><Icon name='ios-home' style={{ paddingLeft:10 }}/></Left>
                  <Body><Text>Home</Text></Body>
                  <Right><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name='ios-key' size={30} style={{ paddingRight:10 }} /></TouchableOpacity></Right>
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
                      <Text style={styles.text}>병원</Text>
                    </CardView>
                    <CardView
                      cardElevation={1}
                      cardMaxElevation={1}
                      cornerRadius={5}
                      style={styles.card}
                    >
                      <Text style={styles.text}>약국</Text>
                    </CardView>
                  </View>

                </View>
              </SafeAreaView>

                <Body>
                  <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('Select')}>
                      <Text>Next</Text>
                  </TouchableOpacity>
                </Body>
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
      marginTop:60,
      margin: 10
    },
    text: {
      textAlign: 'center',
      margin: 10,
      height: 300
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
})
