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

export default class LocationScreen extends Component{

    render(){

        return (
          <Container style={styles.container}>

            <Header style={{ height:90 , backgroundColor: 'black'}}>
                  <Left><Image resizeMode='contain' style={styles.image} source={require('./img/locate2.jpg')}/></Left>
                  <Body><Text  style={{ textAlign: 'center',color:'white', fontWeight:'bold',fontSize:17}}>당신의 위치를 알려주세요</Text></Body>

            </Header>
            <ScrollView>
            <SafeAreaView style={styles.safeAreaView}>
              <View style={styles.Cardcontainer}>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'죽도동'",subject: this.props.navigation.getParam('subject','subject'),gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>

                    <CardView
                      cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>죽도동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'두호동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>

                    <CardView
                      cardElevation={1}
                      cardMaxElevation={1}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>두호동</Text>
                    </CardView>
                  </TouchableOpacity>
                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'흥해읍'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={2}
                      cardMaxElevation={2}
                      cornerRadius={15}
                      style={styles.card}
                    >

                      <Text style={styles.text}>흥해읍</Text>

                    </CardView>
                    </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'창포동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={3}
                      cardMaxElevation={3}
                      cornerRadius={15}
                      style={styles.card}
                    >

                      <Text style={styles.text}>창포동</Text>

                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'장성동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={4}
                      cardMaxElevation={4}
                      cornerRadius={15}
                      style={styles.card}
                    >

                      <Text style={styles.text}>장성동</Text>
                    </CardView>

                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'양덕동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={4}
                      cardMaxElevation={4}
                      cornerRadius={15}
                      style={styles.card}
                    >

                      <Text style={styles.text}>양덕동</Text>
                    </CardView>

                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'기계면'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={6}
                      cardMaxElevation={6}
                      cornerRadius={15}
                      style={styles.card}
                    >

                      <Text style={styles.text}>기계면</Text>

                    </CardView>
                    </TouchableOpacity>

                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'청하면'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                      <CardView
                        cardElevation={4}
                        cardMaxElevation={4}
                        cornerRadius={15}
                        style={styles.card}
                      >

                        <Text style={styles.text}>청하면</Text>
                      </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'남빈동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={8}
                      cardMaxElevation={8}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>남빈동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'대신동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={9}
                      cardMaxElevation={9}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>대신동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'대흥동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','businessHours')})}>
                    <CardView
                      cardElevation={10}
                      cardMaxElevation={10}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>대흥동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'청하면'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={11}
                      cardMaxElevation={11}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>덕산동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'남빈동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={8}
                      cardMaxElevation={8}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>남빈동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'대신동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={9}
                      cardMaxElevation={9}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>대신동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'대흥동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={10}
                      cardMaxElevation={10}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>대흥동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'덕산동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={11}
                      cardMaxElevation={11}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>덕산동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'동빈동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={12}
                      cardMaxElevation={12}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>동빈동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'득량동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={13}
                      cardMaxElevation={13}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>득량동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'상원동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={14}
                      cardMaxElevation={14}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>상원동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'송라면'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={15}
                      cardMaxElevation={15}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>송라면</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'신광면'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={16}
                      cardMaxElevation={16}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>신광면</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'신흥동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={17}
                      cardMaxElevation={17}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>신흥동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'여천동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={18}
                      cardMaxElevation={18}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>여천동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'용흥동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={19}
                      cardMaxElevation={19}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>용흥동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'우현동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={20}
                      cardMaxElevation={20}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>우현동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'죽장면'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={21}
                      cardMaxElevation={21}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>죽장면</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'중앙동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={22}
                      cardMaxElevation={22}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>중앙동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'학산동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={23}
                      cardMaxElevation={23}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>학산동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'학잠동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={24}
                      cardMaxElevation={24}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>학잠동</Text>
                    </CardView>
                  </TouchableOpacity>

                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'항구동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={25}
                      cardMaxElevation={25}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>항구동</Text>
                    </CardView>
                  </TouchableOpacity>

                </View>

                <View flexDirection="row">
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Select',{city: "'학잠동'", subject: this.props.navigation.getParam('subject','subject'), gender: this.props.navigation.getParam('gender','gender'), businessHours: this.props.navigation.getParam('businessHours','24:00-00:00')})}>
                    <CardView
                      cardElevation={26}
                      cardMaxElevation={26}
                      cornerRadius={15}
                      style={styles.card}
                    >
                      <Text style={styles.text}>학잠동</Text>
                    </CardView>
                  </TouchableOpacity>
                </View>




              </View>
            </SafeAreaView>

            </ScrollView>

            <Footer style={{ backgroundColor: '#FFD8D8'}}>
                  <Left style={{ marginLeft:50}}><TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text > 🔙 Back </Text></TouchableOpacity></Left>

                  <Right style={{ marginRight:50}}><TouchableOpacity  onPress={() => this.props.navigation.navigate('Map')}><Text> ➕ Next </Text></TouchableOpacity></Right>
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
    Cardcontainer:{
        backgroundColor: 'pink',
        alignContent: 'center',
        alignItems: 'center'
    },

    safeAreaView: {
      marginTop:16,
      flex: 1
    },
    card: {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      flex: 0,
      margin: 10,
      width:wp('40%')
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
      width:100 ,
      height:130,
      flex: 1,
      marginLeft:10
    }
})
