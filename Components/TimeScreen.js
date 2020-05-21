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
import { Button, Icon,Container,Body, Right, Left, Header,Footer } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CardView from 'react-native-cardview';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class TimeScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header>
                  <Left><Icon name='ios-location' size={30} style={{ paddingRight:10 }} /></Left>
                  <Text>당신이 원하는 시간대를 알려주세요</Text>

            </Header>
            <SafeAreaView style={styles.safeAreaView}>
              <View style={styles.container}>
                <View flexDirection="row">
                  <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <Text style={styles.text}>09:00 - 10:00</Text>
                  </CardView>
                  <CardView
                    cardElevation={1}
                    cardMaxElevation={1}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <Text style={styles.text}>10:00 - 11:00</Text>
                  </CardView>
                </View>
                <View flexDirection="row">
                  <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <Text style={styles.text}>11:00 - 12:00</Text>
                  </CardView>
                  <CardView
                    cardElevation={3}
                    cardMaxElevation={3}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <Text style={styles.text}>12:00 - 13:00</Text>
                  </CardView>
                </View>
                <View flexDirection="row">
                  <CardView
                    cardElevation={4}
                    cardMaxElevation={4}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <Text style={styles.text}>13:00 - 14:00</Text>
                  </CardView>
                  <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <Text style={styles.text}>14:00 - 15:00</Text>
                  </CardView>
                </View>
                <View flexDirection="row">
                  <CardView
                    cardElevation={6}
                    cardMaxElevation={6}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <Text style={styles.text}>15:00 - 16:00</Text>
                  </CardView>
                  <CardView
                    cardElevation={7}
                    cardMaxElevation={7}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <Text style={styles.text}>16:00 - 17:00</Text>
                  </CardView>
                </View>
              </View>
            </SafeAreaView>


            <Footer>
                  <Left><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text> 🔙 Back </Text></TouchableOpacity></Left>

                  <Right><TouchableOpacity onPress={() => this.props.navigation.navigate('Select')}><Text> ➕ Next </Text></TouchableOpacity></Right>
            </Footer>
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
    margin: 10
    },
    text: {
      textAlign: 'center',
      margin: 10,
      height: 75
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    }
})
