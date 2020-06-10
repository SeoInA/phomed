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
import { SelectableComponent } from 'react-native-ui-lib';


export default class ResultQuery extends Component{
    constructor(props){
        super(props);
    }

    showResult = () =>{
        fetch('http://localhost:8000/schedule.php',{
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type' : 'application/json',
              },
              body: JSON.stringify({
                gender: this.props.navigation.getParam('gender','gender'),
                city_name: this.props.navigation.getParam('city','city_name'),
                subject: this.props.navigation.getParam('subject','subject'),
                businessHours: this.props.navigation.getParam('businessHours','24:00-00:00'),
                day: this.props.navigation.getParam('day','1')
            
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
                                const institutionID = this.state.institutionID;
                                console.log(institutionID);
                                Alert.alert('result from your choice');  
                                this.props.navigation.navigate('Result',{result: responseJson});   
                              });
                                              
                          }
                         });
                      
                      
                      
                      
                      
                  }).catch((error) =>{
                      console.error(error);
                  });
          
  
      
    };
  
        

        
        
        

      render(){
          return(
            <Container style={styles.container}>

     
                    <Image resizeMode='contain' style={styles.image} source={require('./img/POMED_LOGO.png')}/>
                  
                    <Footer style={{ backgroundColor: '#FFD8D8'}}>
                        <Left style={{ marginLeft:50}}><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text > 🔙 Back </Text></TouchableOpacity></Left>
                        <Right style={{ marginLeft:50}}><TouchableOpacity onPress={() => {this.showResult()}}><Text > ➕ Next  </Text></TouchableOpacity></Right>
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