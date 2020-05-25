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

export default class MajorScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header style={{ height:90 , backgroundColor: 'black'}}>
                  <Left><Image resizeMode='contain' style={styles.image} source={require('./img/major2.jpeg')}/></Left>
                  <Body><Text  style={{ textAlign: 'center',color:'white', fontWeight:'bold',fontSize:17}}>당신이 필요한 진료과목   알려주세요</Text></Body>

            </Header>

            <SafeAreaView style={styles.safeAreaView}>
              <View style={styles.container}>

                <View flexDirection="row">

                  <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>치과</Text>
                  </TouchableOpacity>
                  </CardView>


                  <CardView
                    cardElevation={1}
                    cardMaxElevation={1}
                    cornerRadius={15}
                    style={styles.card}
                  >
                    <TouchableOpacity>
                    <Text style={styles.text}>가정의학과</Text>
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
                    <Text style={styles.text}>내과</Text>
                  </TouchableOpacity>
                  </CardView>

                  <CardView
                    cardElevation={3}
                    cardMaxElevation={3}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>소아청소년과</Text>
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
                    <Text style={styles.text}>임상병리과</Text>
                  </TouchableOpacity>
                  </CardView>
                  <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>정형외과</Text>
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
                    <Text style={styles.text}>피부과</Text>
                  </TouchableOpacity>
                  </CardView>

                  <CardView
                    cardElevation={7}
                    cardMaxElevation={7}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  <TouchableOpacity>
                    <Text style={styles.text}>안과</Text>
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
      width:130 ,
      height:150,
      flex: 1,
      marginLeft:10
    }
})
