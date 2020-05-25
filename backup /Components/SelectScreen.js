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
//import Icon from 'react-native-vector-icons/Ionicons';

export default class SelectScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header>
                  <Left><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ paddingRight:10 }} /></TouchableOpacity></Left>
                  <Body><Text>SELECT</Text></Body>
                  <Right><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name='ios-key' size={30} style={{ paddingRight:10 }} /></TouchableOpacity></Right>
            </Header>
            <ScrollView>

                <View style={styles.wrapContent}>
                    <View style={styles.content}>
                      <Text>당신의 위치에 따라 병원을 알려드릴까요?</Text>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Location')}><Icon name='ios-heart' style={{ paddingLeft:300, paddingTop: 30 }} /></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.wrapContent}>
                  <View style={styles.content}>
                    <Text>방문하기 원하시는 시간에 따라 병원을 알려드릴까요?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Time')}><Icon name='ios-heart' style={{ paddingLeft:300, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.wrapContent}>
                  <View style={styles.content}>
                    <Text>당신이 필요한 진료 과목에 따라 병원을 알려드릴까요?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Major')}><Icon name='ios-heart' style={{ paddingLeft:300, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.wrapContent}>
                  <View style={styles.content}>
                    <Text>당신의 성별과 같은 의사가 있는 병원을 알려드릴까요?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Gender')}><Icon name='ios-heart' style={{ paddingLeft:300, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>
                <View style={styles.wrapContent}>
                  <View style={styles.content}>
                    <Text>당신의 안전을 위해 코로나 안심병원 안에서 알려드릴까요?</Text>
                    <TouchableOpacity><Icon name='ios-heart' style={{ paddingLeft:300, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>

                <Body>
                  <View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Result')}>
                        <Text>Next</Text>
                    </TouchableOpacity>
                  </View>
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
        height: wp('29%'),
        paddingBottom: wp('5%'),
    },
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFA28F",
    },
    buttonArea: {
        width: '80%',
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
