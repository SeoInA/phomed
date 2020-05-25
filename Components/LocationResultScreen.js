import React, {Component, useState, useEffect} from 'react';
//import Styled from 'styled-components/native';
import {StyleSheet, Text, View,Button} from 'react-native';
//import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
//import CurrentPosition from CurrentPosition.ts;


//type Props = {};

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