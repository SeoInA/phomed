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
import { Button, Icon,Container,Body, Right, Left, Header,Footer } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CardView from 'react-native-cardview';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class GenderScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header style={{ height:90 , backgroundColor: 'black'}}>
                  <Left><Image resizeMode='contain' style={styles.image} source={require('./img/gender2.jpg')}/></Left>
                  <Body><Text  style={{ textAlign: 'center',color:'white', fontWeight:'bold',fontSize:17}}>당신의 성별을 알려주세요</Text></Body>

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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Select',{gender: "'남'"})}><Image resizeMode='contain' style={{ paddingRight:10, width:150 , height:200 }} source={require('./img/man.jpg')}/></TouchableOpacity>
                    <Text style={styles.text}>남성</Text>
                  </CardView>
                  <CardView
                    cardElevation={1}
                    cardMaxElevation={1}
                    cornerRadius={5}
                    style={styles.card}
                  >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Select',{gender: "'여'"})}><Image resizeMode='contain' style={{ paddingRight:10, width:140 , height:200 }} source={require('./img/woman.jpg')}/></TouchableOpacity>
                    <Text style={styles.text}>여성</Text>
                  </CardView>
                </View>

              </View>
            </SafeAreaView>
            <Footer style={{ backgroundColor: '#FFD8D8'}}>
              <Left style={{ marginLeft:50}}><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text > 🔙 Back </Text></TouchableOpacity></Left>
              <Right style={{ marginRight:50}}><TouchableOpacity  onPress={() => this.props.navigation.navigate('Select')}><Text> ➕ Next </Text></TouchableOpacity></Right>
            </Footer>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
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
      marginTop:110
    },
    text: {
      textAlign: 'center',
      margin:40
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    image:{
      borderRadius:20 ,
      width:130 ,
      height:150,
      flex: 1,
      marginLeft:10
    }
})
