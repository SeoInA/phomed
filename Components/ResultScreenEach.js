import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert
} from 'react-native';
import { Button, Icon,Container,Body, Right, Left, Header,Footer } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class ResultScreen extends Component{
    constructor(props){
      super(props);

    

      this.state = {
        city: '',
        responseMSG: '',
        institutionID: '',
        resultJson: ''
      }
      
    }
    
   
      

    render(){
      const resultJson = this.props.navigation.getParam('eachResult','no result json')
      const today_day = this.props.navigation.getParam('today_day','no match day found')
    
        return (
          <Container style={styles.container}>

            <Header style={{backgroundColor:'black'}}>
                  <Left style={{marginLeft: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Left>
                  <Body><Text style={{ color:'white',fontSize:15,fontWeight:'bold'}}>RESULT</Text></Body>
                  <Right style={{marginRight: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name='ios-key' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Right>
            </Header>
            <ScrollView>

               
                <View style={styles.wrapContent}>
                    <View style={styles.content}>
                      <View>
                        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:27, paddingTop:30,color:'#FF8888'}}>당신에게 추천하는{'\n'}병원입니다 </Text>
                      </View>
                      <View flexDirection="row">
                        <View style={{marginLeft: 20,width:10}}>
                          <Image resizeMode='contain' style={styles.image} source={require('./img/thumb.png')}/>

                        </View>
                        <View >
                          <Text style={{marginTop:40,marginLeft:120,textAlign:'center',fontSize:25,color:'black'}}> 병원이름  </Text>
                        </View>

                      </View>
            
                      <View style={{marginLeft: 20,marginTop:25}}>
                     
                          
                        <Text style={{paddingBottom:4}}> 병원위치 : {resultJson[0]['address']}</Text> 
        <Text style={{paddingBottom:4}}> 점심시간 : {resultJson[0]['lunch_break']}</Text>
        <Text style={{paddingBottom:4}}> 진료시간 : {resultJson[0][today_day]}</Text>
        <Text style={{paddingBottom:4}}> 전화번호 : {resultJson[0]['phoneNUM']}</Text>
        <Text style={{paddingBottom:4}}> 의사이름 : {resultJson[0]['name']}</Text>
                        <Text style={{paddingBottom:4}}> 의사성별 : {resultJson[0]['gender']} </Text>
                        <Text style={{paddingBottom:4}}> 버스정거장 : </Text>
                        <Text style={{paddingBottom:4}}> 버스 번호 : </Text>
        <Text style={{paddingBottom:4}}> 병원 진료과목 : {resultJson[0]['subject']}</Text>
                        <Text style={{paddingBottom:4}}> 리뷰 : </Text>
                        <Text style={{paddingBottom:4}}> 별정 : </Text>
                        <Text style={{paddingBottom:4}}> Comment : </Text>
                          
                      </View>
                    </View>
                </View>
               
               
          
            </ScrollView>

            <Footer>

                  <Left style={{marginLeft: 20}}><TouchableOpacity onPress={()=> this.showResult()}><Text> ✔️ Scrap </Text></TouchableOpacity></Left>
                  <Body><TouchableOpacity onPress={() => this.props.navigation.navigate('Write')}><Text> 📝 Write Review </Text></TouchableOpacity></Body>
                  <Right style={{marginRight: 20}}><TouchableOpacity onPress={() => {this.props.navigation.goBack()}}><Text> 🔙 Back </Text></TouchableOpacity></Right>
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
    wrapContent: {
        paddingTop:30,
        width: wp('100%'),
        height: wp('100%'),
        paddingBottom: wp('5%'),
        padding:20,
    },
    content: {
        width: "100%",
        height: "145%",
        backgroundColor: "white",
        borderRadius:50,
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
    image:{

      width:60 ,
      height:90,
      marginLeft:15
    }
})
