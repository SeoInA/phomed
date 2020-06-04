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

export default class MajorScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header style={{ height:90 , backgroundColor: 'black'}}>
                  <Left><Image resizeMode='contain' style={styles.image} source={require('./img/major2.jpeg')}/></Left>
                  <Body><Text  style={{ textAlign: 'center',color:'white', fontWeight:'bold',fontSize:17}}>당신이 필요한 진료과목   알려주세요</Text></Body>

            </Header>

            <SafeAreaView style={styles.safeAreaView}>
              <View style={styles.Cardcontainer}>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'치과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    
                    <CardView
                      cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>치과</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'가정의학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    
                    <CardView
                      cardElevation={1}
                      cardMaxElevation={1}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>가정의학과</Text>
                    </CardView>
                  </TouchableOpacity>
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'내과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>내과</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'소아청소년과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={3}
                      cardMaxElevation={3}
                      cornerRadius={15}
                      style={styles.card}
                    >                   
                      <Text style={styles.text}>소아청소년과</Text>
                    </CardView>
                  </TouchableOpacity>
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'임상병리과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={4}
                      cardMaxElevation={4}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>임상병리과</Text>               
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'정형외과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={5}
                      cardMaxElevation={5}
                      cornerRadius={15}
                      style={styles.card}
                    >  
                      <Text style={styles.text}>정형외과</Text>                 
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'피부과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={6}
                      cardMaxElevation={6}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>피부과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'안과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={7}
                      cardMaxElevation={7}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>안과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'건강검진'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={8}
                      cardMaxElevation={8}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>건강검진</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'소아치과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={9}
                      cardMaxElevation={9}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>소아치과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'성형외과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={10}
                      cardMaxElevation={10}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>성형외과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'마취통증의학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={11}
                      cardMaxElevation={11}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>마취통증의학과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'방사선종양학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={12}
                      cardMaxElevation={12}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>방사선종양학과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'비뇨기과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={13}
                      cardMaxElevation={13}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>비뇨기과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'산부인과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={14}
                      cardMaxElevation={14}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>산부인과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'항문과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={15}
                      cardMaxElevation={15}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>항문과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'한의학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={16}
                      cardMaxElevation={16}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>한의학과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'신경과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={17}
                      cardMaxElevation={17}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>신경과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'신경외과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={18}
                      cardMaxElevation={18}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>신경외과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'흉부외과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={19}
                      cardMaxElevation={19}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>흉부외과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'영상의학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={20}
                      cardMaxElevation={20}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>영상의학과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'예방의학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={21}
                      cardMaxElevation={21}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>예방의학과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'외과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={22}
                      cardMaxElevation={22}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>외과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'이비인후과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={23}
                      cardMaxElevation={23}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>이비인후과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'재활의학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={24}
                      cardMaxElevation={24}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>재활의학과</Text>              
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'정신건강의학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={25}
                      cardMaxElevation={25}
                      cornerRadius={15}
                      style={styles.card}
                    >         
                      <Text style={styles.text}>정신건강의학과</Text>          
                    </CardView>
                  </TouchableOpacity>
                  
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: this.props.navigation.getParam('city','city'),subject: "'진단검사의학과'",gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={26}
                      cardMaxElevation={26}
                      cornerRadius={15}
                      style={styles.card}
                    >
                        <Text style={styles.text}>진단검사의학과</Text>              
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
    Cardcontainer:{
      backgroundColor: 'pink',
      alignContent: 'center',
      alignItems: 'center'
    },

    card: {
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
    //alignSelf: 'center',
    flex: 0,
    margin: 10,
    minWidth: 150
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
      width:130 ,
      height:150,
      flex: 1,
      marginLeft:10
    }
})
