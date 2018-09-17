import React, { Component} from 'react';
import {Platform, Text,StyleSheet, TouchableOpacity, Image} from 'react-native'
import check from '../invockDemo/check'
import partyList from '../invockDemo/partyList'
// import checks from './Demo/checks.js'
import {StackNavigator} from 'react-navigation'
var height=800
var fontsize = 18
var textColor ='white'

var navTitleHeight
if(Platform.OS === 'ios') {
  navTitleHeight = 0
} else {
  navTitleHeight = height*.03+height*.02
}
 const DemoStack = StackNavigator(
  {
    check: {
      screen: check,
       navigationOptions :({navigation}) =>  ({
        title:'Add Party',
        headerTitleStyle: {flex:1 ,textAlign: 'left',alignSelf: 'center',fontSize:fontsize,fontWeight: 'bold'},
        headerStyle:{backgroundColor:'#015E54'},
        headerTintColor: textColor,
        // headerRight:<TouchableOpacity style={{paddingRight:10}}>
        
        // </TouchableOpacity>,
        headerRight: (<Text style={{fontSize:20, color:"white", marginRight:15}} color='#51b7c1' onPress={
          ()=>{ navigation.goBack(); }
        }>SAVE</Text>),
        headerLeft: <TouchableOpacity navigate={navigation.navigate} onPress={() => navigation.goBack(null)}>
          <Image style={{height: height*.035, width: height*.035, marginLeft: height*.02}} source={require('../invockDemo/BackArrow.png')} />
      </TouchableOpacity>,
      })
    },
    partyList: {
      screen: partyList,
      navigationOptions :({navigation}) => ({

        title: 'PARTY LIST',
        header : null
      })
    },
   
  },
  {
    initialRouteName: 'check',
    headerMode: 'float',
    navigationOptions : ({ navigation }) => ({
      headerStyle:{backgroundColor:'#51b7c1'},
      headerTintColor: 'white',

    })
  }
);

export const GlobalStack = StackNavigator(
  {
    DemoStack:{
      screen:DemoStack,
    },
  },
  {
    initialRouteName: 'DemoStack',
    headerMode: 'none',
  }
);
