import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Button, Icon,Container,Body, Right, Left, Header,Footer } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class ResultScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header>
                  <Left><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ paddingRight:10 }} /></TouchableOpacity></Left>
                  <Body><Text>RESULT</Text></Body>
                  <Right><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name='ios-key' size={30} style={{ paddingRight:10 }} /></TouchableOpacity></Right>
            </Header>
            <ScrollView>

                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                </View>

            </ScrollView>

            <Footer>

                  <Left><TouchableOpacity ><Text> ✔️ Scrap </Text></TouchableOpacity></Left>
                  <Body><TouchableOpacity onPress={() => this.props.navigation.navigate('Write')}><Text> 📝 Write Review </Text></TouchableOpacity></Body>
                  <Right><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text> 🔙 Back </Text></TouchableOpacity></Right>
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
    }
})
