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
    
    componentDidMount(){
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
    console.log(this.props.navigation.getParam('institutionID','no result'));
      //console.log(this.props.navigation.getParam('result','no result')); 
      //const jsonfile = this.props.navigation.getParam('result','no result');
      //console.log(jsonfile[0]['address']);

      fetch('http://localhost:8000/eachResult.php',{
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type' : 'application/json',
              },
              body: JSON.stringify({
                institutionID: this.props.navigation.getParam('institutionID','no result'),
                day: today_day
            
              })
          }).then((response)=> response.json())
                  .then((responseJson)=>{
                      //responseMSG = responseJson;
                      //responseMSG = responseMSG.replace('"','');
                      //responseMSG = responseMSG.replace('"','');
                      //responseMSG = responseMSG.trim();
                      //data_retrieve(responseJson);
                      this.setState({responseMSG: JSON.stringify(responseJson)},function(){
                          const responseMSG = this.state.responseMSG;
                          //console.log(responseMSG);              
                          if(responseMSG.includes('No')){
                            Alert.alert(responseMSG);
                            this.props.navigation.navigate('Select');
                          }
                          else{
                            this.setState({institutionID: JSON.stringify(responseJson)}, function(){
                                 
                                console.log(responseJson)
                                this.props.navigation.navigate('ResultEach',{eachResult: responseJson, today_day:today_day}); 
                              });
                                              
                          }
                         });
                      
                  }).catch((error) =>{
                      console.error(error);
                  });
    }
      

    render(){
        return(
          <Container style={styles.container}>

   
                  <Image resizeMode='contain' style={styles.image} source={require('./img/POMED_LOGO.png')}/>
                
                  <Footer style={{ backgroundColor: '#FFD8D8'}}>
                      <Left style={{ marginLeft:50}}><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text > 🔙 Back </Text></TouchableOpacity></Left>
                      
                  </Footer>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      flex:1
  },
  image:{
      borderRadius:20 ,
      width:400 ,
      height:300,
      flex: 1,
      top: 100
  }
})