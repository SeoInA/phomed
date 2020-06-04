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

export default class TimeScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header style={{ height:90 , backgroundColor: 'black'}}>
                  <Left><Image resizeMode='contain' style={styles.image} source={require('./img/time2.jpg')}/></Left>
                  <Body><Text  style={{ textAlign: 'center',color:'white', fontWeight:'bold',fontSize:17}}>당신이 원하는 시간대를   알려주세요</Text></Body>

            </Header>

            <SafeAreaView style={styles.safeAreaView}>
              <View style={styles.Cardcontainer}>

                <View flexDirection="row">
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city') , subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: '09:00-10:00'}) }>
                  <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  
                    <Text style={styles.text}>09:00-10:00</Text>
                  </CardView>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'), subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: '10:00-11:00'})}>
                  <CardView
                    cardElevation={1}
                    cardMaxElevation={1}
                    cornerRadius={15}
                    style={styles.card}
                  >
                    <Text style={styles.text}>10:00-11:00</Text>
                    
                  </CardView>
                </TouchableOpacity>
                </View>

                <View flexDirection="row">
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'), subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: '11:00-12:00'})}>
                  <CardView
                    cardElevation={2}
                    cardMaxElevation={2}
                    cornerRadius={15}
                    style={styles.card}
                  >
      
                    <Text style={styles.text}>11:00-12:00</Text>
                  
                  </CardView>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'), subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: '12:00-13:00'})}>
                  <CardView
                    cardElevation={3}
                    cardMaxElevation={3}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  
                    <Text style={styles.text}>12:00-13:00</Text>
       
                  </CardView>
                </TouchableOpacity>
                </View>

                <View flexDirection="row">
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'), subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: '13:00-14:00'})}> 
                  <CardView
                    cardElevation={4}
                    cardMaxElevation={4}
                    cornerRadius={15}
                    style={styles.card}
                  >
                  
                    <Text style={styles.text}>13:00-14:00</Text>

                  </CardView>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'), subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: '14:00-15:00'})}>
                  <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={15}
                    style={styles.card}
                  >

                    <Text style={styles.text}>14:00-15:00</Text>
   
                  </CardView>
                </TouchableOpacity>
                </View>

                <View flexDirection="row">
                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'), subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: '15:00-16:00'})}>
                  <CardView
                    cardElevation={6}
                    cardMaxElevation={6}
                    cornerRadius={15}
                    style={styles.card}
                  >

                    <Text style={styles.text}>15:00-16:00</Text>
             
                  </CardView>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=> this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'), subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: '16:00-17:00'})}>
                  <CardView
                    cardElevation={7}
                    cardMaxElevation={7}
                    cornerRadius={15}
                    style={styles.card}
                  >
 
                    <Text style={styles.text}>16:00-17:00</Text>

                  </CardView>
                </TouchableOpacity>
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
    Cardcontainer: {
      backgroundColor: 'pink',
      alignContent: 'center',
      alignItems: 'center'
    },

    card: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 0,
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
