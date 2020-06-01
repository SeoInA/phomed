import * as React from 'react';
import {Button, View, Text } from 'react-native';
import {  createAppContainer  } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';

import {Icon} from 'native-base';

import LoginScreen from './LoginScreen.js';
import ReviewScreen from './ReviewScreen.js';
import SettingScreen from './SettingScreen.js';
import SomethingScreen from './SomethingScreen.js';
import HomeScreen from './HomeScreen.js';
import SelectScreen from './SelectScreen.js';
import ResultScreen from './ResultScreen.js';
import WriteScreen from './WriteScreen.js';
import RegisterScreen from './RegisterScreen.js';
import LocationScreen from './LocationScreen.js';
import TimeScreen from './TimeScreen.js';
import MajorScreen from './MajorScreen.js';
import GenderScreen from './GenderScreen.js';
import MapScreen from './MapScreen.js';
import SecondSelectScreen from './SecondSelectScreen';
/*
const ReviewStack = createStackNavigator(
    {
        ReviewScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Review',
        }),
    }
);

const SettingStack = createStackNavigator(
    {
        SettingScreen,
        SomethingScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Setting',
        }),
        initialRouteName: 'SettingScreen',
    }
);

const HomeNavigator = createMaterialTopTapNavigator(
    {
        Home : HomeScreen,
        LogIn: LoginScreen,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'LogIn'){
                    icon = "🌈";
                }


                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);


const TabNavigator = createBottomTabNavigator(
    {
        Review: ReviewStack,
        Home : HomeScreen,
        Setting: SettingStack,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Review'){
                    icon = "🌈";
                }
                else if(routeName === 'Home'){
                    icon ="🏠"
                }
                else if(routeName === 'Setting'){
                    icon = "🌙"
                }


                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);

const AppStack = createStackNavigator(
    {
        screen : HomeNavigator,
        LoginScreen: LoginScreen,
        TabNavigator: {
            screen: TabNavigator,
            navigationOptions: ({navigation}) => ({
                header: null//,
            }),
        },
    }
);
const TabNavigator = createMaterialTopTabNavigator(
    {

        Home : HomeScreen,
        Login: LoginScreen,
    },
    {
        NavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Login'){
                    icon = "🌈";
                }


                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
    }
);
*/

const SettingStack = createStackNavigator(
    {
        Setting:SettingScreen,
        Something:SomethingScreen
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            title: 'Mypage',
        }),
        initialRouteName: 'Setting',
    }
);

const TabNavigator = createBottomTabNavigator(
    {
        MyPage: ReviewScreen,
      //  Home : HomeScreen,
        Review: SettingStack,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'MyPage'){
                    icon = "🌈";
                }

                else if(routeName === 'Review'){
                    icon = "🌙"
                }


                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);


const TabNavigator2 = createBottomTabNavigator(
    {
        Result:ResultScreen,
        Scrap:LoginScreen,
        Write:WriteScreen,
        Back: SelectScreen,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let icon = "▲";

                if(routeName === 'Scrap'){
                    icon = "✔️";
                }
                else if(routeName === 'Write'){
                    icon ="📝"
                }
                else if(routeName === 'Back'){
                    icon = "🔙"
                }


                // can use react-native-vector-icons
                // <Icon name={iconName} size={iconSize} color={iconColor} />
                return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
            }
        }),
        lazy: false,
        tabBarOptions: {
            activeTintColor: "#46c3ad",
            inactiveTintColor: "#888",
        },
    }
);

const AppStack = createStackNavigator(
    {
      Home : {
        screen : HomeScreen,
        navigationOptions:{
          header:null
        }
      },

      Login:{
        screen:LoginScreen,
        navigationOptions:{
          header:null
        }
      },
      TabNavigator: {
          screen: TabNavigator,
          navigationOptions: ({navigation}) => ({
              header: null//,
          }),
      },
      Select:{
        screen : SelectScreen,
        navigationOptions:{
          header:null
        }
      },

      SecondSelect:{
        screen : SecondSelectScreen,
        navigationOptions:{
          header:null
        }
      },

      Location:{
        screen : LocationScreen,
        navigationOptions:{
          header:null
        }
      },
      
      Map:{
        screen : MapScreen,
        navigationOptions:{
            header:null
        }
      },
      
      Time:{
        screen : TimeScreen,
        navigationOptions:{
          header:null
        }
      },
      Major:{
        screen : MajorScreen,
        navigationOptions:{
          header:null
        }
      },
      Gender:{
        screen : GenderScreen,
        navigationOptions:{
          header:null
        }
      },
      Result : {
        screen : ResultScreen,
        navigationOptions:{
          header:null
        }
      },
      Write : {
        screen : WriteScreen,
        navigationOptions:{
          header:null
        }
      },
      Register : {
        screen : RegisterScreen,
        navigationOptions:{
          header:null
        }
      },

    }
);

export default createAppContainer(AppStack);
