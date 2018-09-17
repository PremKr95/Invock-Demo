import React, { Component } from 'react'
  import {
    StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
  TouchableNativeFeedback,
  TouchableHighlight,
  Dimensions,
  Platform
}
from 
'react-native'

import { connect } from 'react-redux';
let mThis
const cardHeaderText = cardHeight*.16;
const cardsubHeaderText = cardHeight*.16;
const carddriverPerformanceText = cardHeight*.15;
const marginBetweenText = cardHeight*.005;
import {setPartyDetails } from './actions'
//import { setPartyDetails } from '../actions';
let {height, width} = Dimensions.get('window');
const cardHeight = height*.15;
var balance;
var jsonData = {
    "elements": [
      {
          balance: 11000.50,
          isDebit: true,
          name: 'Alpha Business Test 1533217732',
          id: '5b630bc5b4dbfe0014f68ab9'
        },
        {
          balance: 15000,
          isDebit: true,
          name: 'Jewel',
          id: '5b654cdf881c1d0014f4f31e'
        },
        {
          balance: 20000,
          isDebit: false,
          name: 'Aakash Ganga Cosmetics',
          id: '5b879d09d1f79c0014a7276a'
        },
        {
          balance: 40000.00,
          isDebit: true,
          name: 'AGRA-A TO Z IMMITATION JEWELLERS',
          id: '5b879d09d1f79c0014a7276b'
        },
        {
          balance: 10000.50,
          isDebit: false,
          name: 'AGRA KUMAR & BROS',
          id: '5b879d09d1f79c0014a7276c'
        }
      ]
}
class check extends Component {
  constructor(props){
    super(props)
    mThis=this;
    this.state=  {
      dataSource:'',
      flatListData:true
    }
  }

  componentDidMount(){

  }

  myViewWillApper = (dataFromChild)=>{
    if(this.props.userObj.aliasName === "undefined"){
       mThis.setState({flatListData : true}) 
    }else{
      mThis.setState({flatListData : false}) 
    }
    
    for(i=0;i<jsonData.elements.length;i++){
      if(this.props.userObj.id === jsonData.elements[i].id){
          balance= jsonData.elements[i].balance
      }
    }
  }

openPartyList(){
  this.props.navigation.navigate('partyList',
  {myViewWillAppear:this.myViewWillApper})
}

renderItem = ({item}) => {
  return(
    <TouchableNativeFeedback
activeOpacity = { .5 } delayPressIn={0}
   >
        {this.commonView(item)}

    </TouchableNativeFeedback>
  );
}

commonView = (item) => {
  return(
      <View style={styles.listItemContainer}>
      <View style={styles.listItemTextViewContainer}>
        <View style={styles.listItemHeader}>
          <Text style={styles.listItemHeaderText}>{item.aliasName}</Text>
        </View>
        <View style={styles.listItemSubHeadererContainer}>
            <Text style={styles.listItemSubHeader1}>"Prem"</Text>
        </View>
      </View>
    </View> 
  );
}

renderSeparator = () => {
  return(
    <View style = {styles.separator}>
      <View style = {styles.separatorInside}></View>
    </View>
  )
}
  render() {
    return (
      <View style={{flex:1}}>
        {this.state.flatListData ? (
        <View style={{flex:1}}>
      <View style={{width:"100%",height:'4%',marginTop:25, justifyContent:'center',backgroundColor:'#868686'}}>
        <Text style={{position:'absolute',marginLeft:"4%"}}>Party Details</Text>
      </View> 
    
      <TouchableOpacity style={{ width:"100%",height:'10%',justifyContent:'center'}} onPress={()=>this.openPartyList()}>
      <View style={{width:"100%",height:'100%',flexDirection:'row', alignItems:'center'}}>
       <Image style={{width:25, height:25, marginLeft:"4%"}}
        source={require('./AddContact.png')}
        />
         <Text style={{textAlign:'center', marginLeft:"5%", color:"#4964DA"}}>+ add Party</Text>
          <Image style={{position:'absolute', right:10}}
        source={require('./path.png')}
        />

      </View>
      </TouchableOpacity>
         </View>
         ) : (
                <View style={{flex:1}}>
                <View style={{width:"100%",height:'4%',marginTop:25, justifyContent:'center',backgroundColor:'#868686'}}>
                  <Text style={{position:'absolute',left:10}}>Party Details</Text>
                </View> 
              
              <View style={{width:"100%",height:'10%',flexDirection:'row', alignItems:'center'}}>
                 <Image style={{width:25, height:25, marginLeft:"5%",}}
                  source={require('./AddContact.png')}
                  />
                      <View style={{height:'100%',flexDirection:'column'}}>
                         <Text style={{textAlign:'left', marginLeft:"5%", color:"black",fontWeight:'bold'}}>{mThis.props.userObj.aliasName}</Text>
                         <Text style={{textAlign:'left', marginLeft:"5%", color:"grey",width:'80%'}}>{mThis.props.userObj.address}</Text>
                         <Text style={{textAlign:'left', marginLeft:"5%", color:"grey"}}>Current Balance :Rs.{balance}</Text>
                      </View>
                                   
                </View>
                   </View>
         )}

         
         </View>
      )
  }
}

function mapStateToProps(state) {
  return {
    userObj: state.partyDetails
  }
}


export default connect(mapStateToProps)(check)

const styles = StyleSheet.create({

  buttonStyle1: {
    alignSelf: "center",
    height: "8%",
    width: "70%",
    backgroundColor: "#C2185B",
    borderRadius: 40,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    position: "absolute",
    bottom: "10%"
  },

  buttonText: {
    textAlign: "center",
    fontSize: 16,
    color: "#FFFFFF"
  },

  flatList: {
    padding: cardHeight*.1,
    width: '100%',
    height:'100%',
    //marginTop:'2%',
    position: 'absolute',
    bottom: "2%",
   // marginBottom: 50,
  },

  card: {
    alignSelf: 'center',
    width: '90%',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: cardHeight,
  
    margin: cardHeight*.05,
    position: 'absolute',
    top: '3%',
    borderRadius: 10,
  },
  cardNew: {
   alignSelf: 'center',
   width: '95%',
   flexDirection: 'row',
   backgroundColor: 'white',
   height: cardHeight*1.2,
   margin: cardHeight*.05,
   position: 'absolute',
   borderRadius: 10,
 },
//   cardLeftImage: {
//     height: ImageHeight,
//     width: ImageHeight,
//     alignSelf: 'center',
//   },
  cardTextContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: cardHeight*.1,
    marginRight:cardHeight*.05
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubHeaderText: {
    fontSize: 15,
  },
  cardImageRight: {
    justifyContent: 'flex-end',
    
  },
  sos: {
    position: 'absolute',
    bottom: cardHeight*.3,
    right: cardHeight*.3,
  },
  info: {
    position: 'absolute',
    top: cardHeight*.3,
    right: cardHeight*.3,
  },
  infoNew: {
   position: 'absolute',
   top: cardHeight*1.6,
   right: cardHeight*.3,
 },
 listItemContainer: {
   flexDirection: "row",
   marginHorizontal: "3%",
   borderRadius: 8,
   padding: 5,
   marginVertical: 5,
   elevation: 0
 },
 listItemImage: {
   alignSelf: "center",
   width: 50,
   height: 50,
   margin: "3%"
 },
 listItemImageTransform: {
   alignSelf: "center",
   transform: [{ rotateY: "180deg" }],
   width: 50,
   height: 50,
   margin: "3%"
 },
 upArrow: {
   justifyContent: "flex-end",
   width: 30,
   height: 30
 },
 listItemTextViewContainer: {
   flex: 1,
   marginRight: "3%",
   marginTop: 5
 },
 listItemHeaderText: {
   justifyContent: "flex-start",
   textAlign: "center",
   textAlignVertical: "center",
   color: "black",
   fontSize: 14,
   fontWeight: "bold"
 },
 listItemHeader: {
   // height:10,
   flex: 1,
   justifyContent: "space-between",
   flexDirection: "row"
 },
 listItemSubHeadererContainer: {
   flex: 1
 },
 listItemSubHeadererContainer1: {
   marginBottom: 5,
   flex: 1,
   justifyContent: "space-between",
   flexDirection: "row"
 },
 listItemSubHeadererContainerSmall: {
   flex: 1,
   flexDirection: "row",

   justifyContent: "flex-end"
 },
 listItemSubHeadererEta: {
   fontSize: 14
 },
 listItemSubHeadererEtaValue: {
   fontSize: 14,
   marginLeft: 5,
   marginStart: 5,
   color: "black"
 },
 listItemSubHeader1: {
   fontSize: 16
 },
 listItemSubHeader2: {
   fontSize: 14
 },
 listItemlocationDetails: {
   flex: 3,
   fontSize: 14,
   justifyContent: "flex-start"
 },
 SosStyle1: {
   alignSelf: "flex-end",
   justifyContent: "center",
   alignItems: "center",
   borderColor: "#fff",
   position: "absolute",
   end: "6%",
   bottom: "6%"
 },
 firstRowContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginVertical: marginBetweenText,
 },
 firstRowLeft: {
   fontSize: cardHeaderText,
   fontWeight: 'bold',
   color: 'black',
   flex: 3,
 },
 firstRowRight: {
   flex: 2,
   justifyContent: 'flex-end',
 },
 secondRowContainer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginVertical: marginBetweenText,
 },
 secondRowLeft: {
   fontSize: cardsubHeaderText,
   color: 'grey',
 },
 secondRowRight: {
   fontSize: cardsubHeaderText,
   color: 'grey',
 },
 thirdRowContainer: {
   
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginVertical: marginBetweenText,
 },
 thirdRowLeft: {
   fontSize: carddriverPerformanceText,
   color: 'grey',
 },
 textContainer: {
   flex: 7,
   justifyContent: 'center',
 },
 threeDotsContainer: {
   flex: 1,
   alignItems: 'center',
   alignSelf:'center',
   justifyContent: 'flex-start',
   marginTop: cardHeight*.1,
 },
 threeDots: {
   alignItems:'center',
   alignSelf:'center',
   justifyContent:'center'
 },
 separator: {
    marginHorizontal: '2.5%'
  },
  separatorInside: {
    height: 1,
    width: '100%',
    backgroundColor: '#c5d5c5',
  },
})

