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
import { createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

//import Icon from 'react-native-vector-icons/Ionicons';

export default class WriteScreen extends Component{

  static navigationOptions = {
      header: null,
  };

  constructor(props){
      super(props)

      this.state = {
          review: '',
          responseMSG: '',
          color1: '#ccc',
          color2: '#ccc',
          color3: '#ccc',
          color4: '#ccc',
          color5: '#ccc',
          pressed1: false,
          pressed2:false,
          pressed3:false,
          pressed4:false,
          pressed5:false,
          rating:0,
          userID: this.props.navigation.getParam('userID','userID'),
          institutionID:this.props.navigation.getParam('institutionID','institutionID')
      }
  }

  UserRegistrationFunction = () =>{

      const userID = this.state.userID;
      const institutionID = this.state.institutionID;
      const{review} = this.state;
      const rating = this.state.rating;



      fetch('http://localhost:8000/review.php',{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type' : 'application/json',
          },
          body: JSON.stringify({
              institutionID: institutionID,
              userID: userID,
              rating: rating,
              review: review
          })
      }).then((response)=> response.json())
              .then((responseJson)=>{
                  /*responseMSG = JSON.stringify(responseJson);
                  responseMSG = responseMSG.replace('"','');
                  responseMSG = responseMSG.replace('"','');
                  responseMSG = responseMSG.trim();
                  */
                 this.setState({responseMSG: JSON.stringify(responseJson)},function(){
                  const responseMSG = this.state.responseMSG;
                  console.log(responseMSG);
                  if(responseMSG.includes('Successful')){
                      this.props.navigation.navigate('Something');
                  }
                  else{

                      this.props.navigation.goBack();
                  }
                 });
                  Alert.alert(responseJson);
              }).catch((error) =>{
                  console.error(error);
              });

  }


  pressHeart(){
    if(this.state.rating==0){
      if(!this.state.pressed1){
        this.setState({ rating:1,pressed1: true,color1: 'yellow'});
      }
      else{
        this.setState({ rating:0, pressed1: false,color1: '#ccc'});

      }
    }
    else if(this.state.rating==1){

      if(!this.state.pressed2){
        this.setState({ rating:2, pressed2: true,color1: 'yellow',color2:'yellow'});
      }
      else{
        this.setState({  rating:1,pressed2: false,color1: 'yellow',color2:'#ccc'});

      }
    }
    else if(this.state.rating==2){
      if(!this.state.pressed3){
        this.setState({ rating:3,pressed3: true,color1: 'yellow',color2:'yellow',color3:'yellow'});

      }
      else{
        this.setState({  rating:2,pressed3: false,color1: 'yellow',color2:'yellow',color3:'#ccc'});

      }
    }
    else if(this.state.rating==3){
      if(!this.state.pressed4){
        this.setState({ rating:4,pressed4: true,color1: 'yellow',color2:'yellow',color3:'yellow',color4:'yellow'});

      }
      else{
        this.setState({  rating:3,pressed4: false,color1: 'yellow',color2:'yellow',color3:'yellow',color4:'#ccc'});

      }
    }
    else if(this.state.rating==4){
      if(!this.state.pressed5){
        this.setState({ rating:5,pressed5: true,color1: 'yellow',color2:'yellow',color3:'yellow',color4:'yellow',color5:'yellow'});

      }
      else{
        this.setState({ rating:4, pressed5: false,color1: 'yellow',color2:'yellow',color3:'yellow',color4:'yellow',color5:'#ccc'});

      }
    }
  }


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
                          <TouchableOpacity onPress={() => this.pressHeart()}><Icon name='ios-star' size={10} style={{ color:this.state.color1,paddingRight:10 }} /></TouchableOpacity>
                          <TouchableOpacity onPress={() => this.pressHeart()}><Icon name='ios-star' size={10} style={{ color:this.state.color2,paddingRight:10 }} /></TouchableOpacity>
                          <TouchableOpacity onPress={() => this.pressHeart()}><Icon name='ios-star' size={10} style={{ color:this.state.color3,paddingRight:10 }} /></TouchableOpacity>
                          <TouchableOpacity onPress={() => this.pressHeart()}><Icon name='ios-star' size={10} style={{ color:this.state.color4,paddingRight:10 }} /></TouchableOpacity>
                          <TouchableOpacity onPress={() => this.pressHeart()}><Icon name='ios-star' size={10} style={{ color:this.state.color5,paddingRight:10 }} /></TouchableOpacity>
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
                            ratingOfLines={10}
                            multiline={true}
                            onChangeText = {review =>this.setState({review})}
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
