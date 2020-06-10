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

    showResult = () =>{
      //console.log(this.props.navigation.getParam('result','no result'));
      const jsonfile = this.props.navigation.getParam('result','no result');
      //console.log(jsonfile[0]['address']);
    }


    render(){
      const jsonfile = this.props.navigation.getParam('result','no result');
      //console.log(jsonfile[0]['name']);
      console.log(jsonfile.length)
      //console.log(jsonfile[jsonfile.length-1]);
      //console.log(jsonfile[jsonfile.length-1]['institution_name'])

      const today_num = new Date().getDay()
      var today_day = '';
      switch(today_num){
        case 0:
            today_day = 'sunday';
            break;
        case 1:
            today_day = 'monday';
            break;
        case 2:
            today_day = 'tuesday';
            break;
        case 3:
            today_day = 'wednesday';
            break;
        case 4:
            today_day = 'thursday';
            break;
        case 5:
            today_day = 'friady';
            break;
        case 6:
            today_day = 'saturday';
            break;
    }
    console.log(today_num,today_day);

    var institution_list = [];
    var uniqueInstID = [];

    for(let i=0; i<jsonfile.length; i++){
      if(!uniqueInstID.includes(jsonfile[i]['institutionID'])){
        uniqueInstID.push(jsonfile[i]['institutionID'])
        institution_list.push(
          <View>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('EachQuery',{institutionID: jsonfile[i]['institutionID']})}>
              <Text> {jsonfile[i]['institution_name']}</Text>
            </TouchableOpacity>
          </View>
        )
      }
      else{

      }
    }


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
                    {institution_list}
                    </View>
                </View>



            </ScrollView>

            <Footer>

                  <Left style={{marginLeft: 20}}><TouchableOpacity><Text> ✔️ Scrap </Text></TouchableOpacity></Left>
                  <Body><TouchableOpacity onPress={() => this.props.navigation.navigate('Write')}><Text> 📝 Write Review </Text></TouchableOpacity></Body>
                  <Right style={{marginRight: 20}}><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text> 🔙 Back </Text></TouchableOpacity></Right>
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
