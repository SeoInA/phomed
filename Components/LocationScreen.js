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

export default class LocationScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header style={{ height:90 , backgroundColor: 'black'}}>
                  <Left><Image resizeMode='contain' style={styles.image} source={require('./img/locate2.jpg')}/></Left>
                  <Body><Text  style={{ textAlign: 'center',color:'white', fontWeight:'bold',fontSize:17}}>당신의 위치를 알려주세요</Text></Body>

            </Header>

            <SafeAreaView style={styles.safeAreaView}>
              <View style={styles.container}>

                <View flexDirection="row">

                  <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={15}
                    style={styles.card}
                    onPress = {() => this.props.navigation.navigate('LocationResult')}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>죽도동</Text>
                  </TouchableOpacity>
                  </CardView>


                  <CardView
                    cardElevation={1}
                    cardMaxElevation={1}
                    cornerRadius={15}
                    style={styles.card}
                  >
                    <TouchableOpacity>
                    <Text style={styles.text}>두호동</Text>
                    </TouchableOpacity>
                  </CardView>

                </View>
                <View flexDirection="row">

                  <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>흥해읍</Text>
                  </TouchableOpacity>
                  </CardView>

                  <CardView
                    cardElevation={3}
                    cardMaxElevation={3}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>창포동</Text>
                  </TouchableOpacity>
                  </CardView>
                </View>
                <View flexDirection="row">
                  <CardView
                    cardElevation={4}
                    cardMaxElevation={4}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>장성동</Text>
                  </TouchableOpacity>
                  </CardView>
                  <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>양덕동</Text>
                  </TouchableOpacity>
                  </CardView>
                </View>
                <View flexDirection="row">
                  <CardView
                    cardElevation={6}
                    cardMaxElevation={6}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>기계면</Text>
                  </TouchableOpacity>
                  </CardView>

                  <CardView
                    cardElevation={7}
                    cardMaxElevation={7}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>청하면</Text>
                  </TouchableOpacity>
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
      marginTop:16,
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
      margin:40
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    image:{
      borderRadius:20 ,
      width:100 ,
      height:130,
      flex: 1,
      marginLeft:10
    }
})
