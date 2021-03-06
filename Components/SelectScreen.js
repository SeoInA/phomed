import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import { Button, Icon,Container,Body, Right, Left, Header } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class SelectScreen extends Component{
    constructor(props){
      super(props);
      /*
      this.state = {
        city: '',
        subject: '',
        gender: '',
        businessHours: ''
      }
      */

      /*
      var d = new Date();
      var n = d.getDay();
      console.log(n);
      */
      console.log(new Date().getDay());
    }


    render(){

        return (
          <Container style={styles.container}>

            <Header style={{padding: wp('5%'),backgroundColor:'black'}}>
                  <Left style={{marginLeft: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Left>
                  <Body><Text>SELECT</Text></Body>
                  <Right style={{marginRight: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name='ios-key' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Right>
            </Header>
            <ScrollView>

                <View style={styles.wrapContent}>
                  <View style={{width: 110, height: 89,backgroundColor: "#FFA28F"}}>
                    <Image resizeMode='contain' style={styles.image} source={require('./img/locate.jpg')}/>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.text}>당신의 위치에 따라 병원을{"\n"}알려드릴까요?</Text>

                  </View>
                  <View style={{paddingLeft:10,paddingRight:25, height: 89,backgroundColor: "#FFA28F"}}>
                    <TouchableOpacity onPress={() => {console.log(this.props.navigation.getParam('city' ,'city')), console.log(this.props.navigation.getParam('subject','subject')),console.log(this.props.navigation.getParam('gender','gender')),console.log(this.props.navigation.getParam('businessHours','24:00-00:00')),this.props.navigation.navigate('Location',{city: this.props.navigation.getParam('city','city'),subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}}><Icon name='ios-heart' style={{ paddingLeft:25, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>

                <View style={styles.wrapContent}>
                  <View style={{width: 110, height: 89,backgroundColor: "#FFA28F"}}>
                    <Image resizeMode='contain' style={styles.image} source={require('./img/time.jpg')}/>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.text}>당신이 원하는 시간대에{"\n"}진료하는 병원을 알려드릴까요?</Text>
                  </View>
                  <View style={{paddingLeft:10,paddingRight:25, height: 89,backgroundColor: "#FFA28F"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Time',{city: this.props.navigation.getParam('city','city'),subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}><Icon name='ios-heart' style={{ paddingLeft:25, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>

                <View style={styles.wrapContent}>
                  <View style={{width: 110, height: 89,backgroundColor: "#FFA28F"}}>
                    <Image resizeMode='contain' style={styles.image} source={require('./img/major.jpeg')}/>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.text}>당신이 필요한 진료 과목에 따라{"\n"}병원을 알려드릴까요?</Text>
                  </View>
                  <View style={{paddingLeft:10,paddingRight:25, height: 89,backgroundColor: "#FFA28F"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Major',{city: this.props.navigation.getParam('city','city'),subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}><Icon name='ios-heart' style={{ paddingLeft:25, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>

                <View style={styles.wrapContent}>
                  <View style={{width: 110, height: 89,backgroundColor: "#FFA28F"}}>
                    <Image resizeMode='contain' style={styles.image} source={require('./img/gender.jpg')}/>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.text}>당신의 성별과 같은 의사가 있는{"\n"}병원을 알려드릴까요?</Text>
                  </View>
                  <View style={{paddingLeft:10,paddingRight:25, height: 89,backgroundColor: "#FFA28F"}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Gender',{city: this.props.navigation.getParam('city','city'),subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}><Icon name='ios-heart' style={{ paddingLeft:25, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>

                <View style={styles.wrapContent}>
                  <View style={{width: 110, height: 89,backgroundColor: "#FFA28F"}}>
                    <Image resizeMode='contain' style={styles.image} source={require('./img/corona.png')}/>
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.text}>코로나 안심병원인 병원을{"\n"}찾으시나요?</Text>
                  </View>
                  <View style={{paddingLeft:10,paddingRight:25, height: 89,backgroundColor: "#FFA28F"}}>
                    <TouchableOpacity ><Icon name='ios-heart' style={{ paddingLeft:25, paddingTop: 30 }} /></TouchableOpacity>
                  </View>
                </View>

                <Body style={{backgroundColor:'black'}}>
                  <View >
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ResultQuery',{city: this.props.navigation.getParam('city','city_name'),subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00'), day: (new Date().getDay())})}>
                        <Text style={{marginTop:15,width:50,color:'white',fontWeight:'bold'}}>Next</Text>
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
        backgroundColor: 'black',
    },
    wrapContent: {
        backgroundColor: "#FFA28F",
        width: wp('100%'),
        height: 108,
        flexDirection: 'row',
        paddingBottom: wp('5%'),
    },
    content: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#FFA28F",
    },
    text :{
      textAlign:'center',
      paddingTop:30,width: 180, height: 89,backgroundColor: "#FFA28F",
      fontWeight:'bold',
      fontSize:14,

    },
    image:{

      width:70 ,
      height:90,
      marginLeft:15
    }
})
