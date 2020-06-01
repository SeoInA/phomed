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


export default class LocationQuery extends Component{
    constructor(props){
        super(props);
  
        this.state = {
          city: '',
          responseMSG: '',
          city_name: this.props.navigation.state.params.city
        }

        
        
        fetch('http://seongmindbphp.000webhostapp.com/query/city.php',{
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type' : 'application/json',
              },
              body: JSON.stringify({
                  city_name: this.state.city_name
                  
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
                            //console.log(responseMSG);                        
                          }
                         });
                      
                      this.setState({institutionID: JSON.stringify(responseJson)}, function(){
                        const institutionID = this.state.institutionID;
                        console.log(institutionID);
                        Alert.alert('keep selecting or click next for result');
                        setTimeout(() => {
                            this.props.navigation.navigate('SecondSelect',{institutionID: institutionID});
                        }, 1000);
                        
                  
                        
                       
                      });
                      
                      
                      
                  }).catch((error) =>{
                      console.error(error);
                  });
          
  
      }

      render(){
          return(
            <Container style={styles.container}>

     
                    <Image resizeMode='contain' style={styles.image} source={require('./img/POMED_LOGO.png')}/>
                  

    
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