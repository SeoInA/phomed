
import React, {Component, useState, useEffect} from 'react';
//import Styled from 'styled-components/native';
import {StyleSheet, SafeAreaView, Text, View,Button,TouchableOpacity,Image} from 'react-native';
//import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
//import {MapView, Marker} from 'expo';
//import CurrentPosition from CurrentPosition.ts;
//import {MapView, Marker} from 'expo';
import {Footer, Container,Body, Right, Left, Header,} from 'native-base';
import * as Location from 'expo-location';


export default class MapScreen extends Component{
  constructor(props){
    super(props);
    
    this.state = {
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    targetLatitude: 0,
    targetLongitude: 0,
    errorMSG: " "
    }
  }
  
  //const[location,setLocation] = useState(null);
  //const[errorMsg, setErrorMsg] = useState(null);
  componentDidMount(){
    
      (async ()=> {
        let {status} = await Location.requestPermissionsAsync();
        if(status!=="granted"){
          this.setState({errorMSG: " permission is denied "});
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log(location.coords.latitude,location.coords.longitude);
        this.setState({latitude: location.coords.latitude});
        this.setState({longitude: location.coords.longitude});
        //setLocation(location);
        
        if(this.state.errorMsg){
          console.log(this.state.errorMsg);
        }

        let returnedLocation = await Location.geocodeAsync("한동대학교");
        console.log(returnedLocation[0].latitude, returnedLocation[0].longitude);
        this.setState({targetLatitude: returnedLocation[0].latitude});
        this.setState({targetLongitude: returnedLocation[0].longitude });
      })();

      
    
  }
  
  
  

  
  render(){
    return (
      <Container style= {styles.container}>
        
        <MapView 
          style={styles.container} 
          //provider = {PROVIDER_GOOGLE} 
          onMapReady={() =>{this.setState({regionSet:true})}}
          region = {{
            latitude: Number(this.state.latitude),
            longitude: Number(this.state.longitude),
            //latitudeDelta: 0.01,
            //longitudeDelta: 0.01
          }}>
          <Marker coordinate = {{latitude: Number(this.state.latitude), longitude: Number(this.state.longitude)}}
                  title = {"your location"}/>
          <Marker coordinate = {{latitude: this.state.targetLatitude, longitude: this.state.targetLongitude}}
                  title = {"target location"}/>
        </MapView>
      
      <Footer style={{ backgroundColor: '#FFD8D8'}}>
        <Left style={{ marginLeft:50}}><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text > 🔙 Back </Text></TouchableOpacity></Left>

        <Right style={{ marginRight:50}}><TouchableOpacity  onPress={() => this.props.navigation.navigate('Map')}><Text> ➕ Next </Text></TouchableOpacity></Right>
      </Footer>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  /*
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  */

  buttonContainer: {
    marginTop:20
  },

  map: {
    position: 'absolute',
    left: 0,
    top: 90,
    right: 0,
    bottom: 0
  },
  safeAreaView: {
    marginTop:16,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  image:{
    borderRadius:20 ,
    width:100 ,
    height:130,
    flex: 1,
    marginLeft:10
  }
});


//type Props = {};

/*
export default class LocationResultScreen extends Component {
    static navigationOptions = {
        header: null,
    };
  //const [location, setLocation] = useState([])
    constructor(props){
        super(props);
        
        this.state = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
        }
    }
    componentDidMount(){
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          });
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},  
      );
    }
    
  
  render(){
    return (
      
        <MapView 
          style={styles.map} 
          provider = {PROVIDER_GOOGLE} 
          onMapReady={() =>{this.setState({regionSet:true})}}
          region = {{
            latitude: Number(this.state.latitude),
            longitude: Number(this.state.longitude),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          }}>
          <Marker coordinate = {{latitude: Number(this.state.latitude), longitude: Number(this.state.longitude)}}/>
        </MapView>
      
     
    );
  }
  
  
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonContainer: {
      marginTop:20
    },
  
    map: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    }
  });
  */

  