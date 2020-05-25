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
import { Button, Icon,Container,Body, Right, Left, Header,Footer } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import Icon from 'react-native-vector-icons/Ionicons';

export default class WriteScreen extends Component{


    render(){

        return (
          <Container style={styles.container}>

            <Header style={{backgroundColor:'black'}}>
                  <Left style={{marginLeft: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Icon name='ios-home' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Left>
                  <Body><Text style={{ color:'white',fontSize:15,fontWeight:'bold'}}>Write Review</Text></Body>
                  <Right style={{marginRight: 20}}><TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Icon name='ios-key' size={30} style={{ color:'white',paddingRight:10 }} /></TouchableOpacity></Right>
            </Header>
            <ScrollView>

                <View style={styles.wrapContent}>
                    <View style={styles.content}>
                      <View>
                        <Text style={{textAlign:'center',fontSize:30, paddingTop:30,color:'#FF8888'}}>Review</Text>
                      </View>
                      <View>
                        <View >
                          <Text style={{marginTop:30,textAlign:'center',fontSize:25,color:'black'}}> 병원이름  </Text>
                        </View>
                        <View flexDirection="row" style={{marginLeft:83,marginTop:10}}>
                          <TouchableOpacity onPress={() => {this.color='yellow'}}><Icon name='ios-star' size={10} style={{ color:'#ccc',paddingRight:10 }} /></TouchableOpacity>
                          <TouchableOpacity onPress={() => {this.color='yellow'}}><Icon name='ios-star' size={10} style={{ color:'#ccc',paddingRight:10 }} /></TouchableOpacity>
                          <TouchableOpacity onPress={() => {this.color='yellow'}}><Icon name='ios-star' size={10} style={{ color:'#ccc',paddingRight:10 }} /></TouchableOpacity>
                          <TouchableOpacity onPress={() => {this.color='yellow'}}><Icon name='ios-star' size={10} style={{ color:'#ccc',paddingRight:10 }} /></TouchableOpacity>
                          <TouchableOpacity onPress={() => {this.color='yellow'}}><Icon name='ios-star' size={10} style={{ color:'#ccc',paddingRight:10 }} /></TouchableOpacity>
                        </View>
                      </View>

                      <View style={{marginLeft: 20,marginTop:25}}>
                        <Text style={{paddingBottom:4,color:'#FF8888',fontSize:17}}> Comment </Text>
                        <View style={styles.textAreaContainer} >

                          <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Type something"
                            placeholderTextColor="#FF8888"
                            numberOfLines={10}
                            multiline={true}
                          />
                        </View>
                      </View>
                    </View>
                </View>

            </ScrollView>

            <Footer>

                  <Left style={{marginLeft: 50}}><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text> 🔙 Back </Text></TouchableOpacity></Left>

                  <Right style={{marginRight: 50}}><TouchableOpacity><Text> Success </Text></TouchableOpacity></Right>
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
    textAreaContainer: {
      marginTop:5,
      marginRight:20,
      borderColor: '#FF8888',
      borderWidth: 1,
      padding: 5
    },
    textArea: {
      height: 180,
      justifyContent: "flex-start"
    }
})
