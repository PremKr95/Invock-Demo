import React, { Component } from 'react'

import {
    StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Dimensions,
  StatusBar
}
from 
'react-native'
let myViewWillAppear
// import color from '../common/common';

// import { SearchBar } from 'react-native-elements'
import {
    Container,
    Input
  } from "native-base";
import { connect } from 'react-redux';
import { setPartyDetails } from './actions';  
let {height, width} = Dimensions.get('window');
var mThis;    
var jsonData = {
    "elements": [
        {
            aliasName: 'Alpha Business',
            primaryContactId: '5b630bc5b4dbfe0014f68aba',
            gstBusinessType: 'regular',
            address: 'Gautam Tower, Near \'B\' Cabin, off Gokhale Road, Thane',
            city: 'Thane',
            state: 'MH',
            pincode: 400601,
            country: 'India',
            gstin: '26CVBPT2222T1Z5',
            name: 'Alpha Business Test 1533217732',
            industry: 'IT',
            pancard: 'CVBPT2222T',
            name: 'Alpha Business Test 1533217732',
            id: '5b630bc5b4dbfe0014f68ab9'
          },
          {
            aliasName: 'Jewl',
            primaryContactId: '5b654cdf881c1d0014f4f31f',
            gstBusinessType: 'Regular GST Business',
            address: 'Shop 123',
            city: 'Mumbai',
            state: 'MH',
            pincode: 400012,
            country: 'India',
            gstin: 'AJ122458493',
            name: 'Jewel',
            industry: '',
            pancard: '',
            id: '5b654cdf881c1d0014f4f31e'
          },
          {
            aliasName: 'Aakash',
            primaryContactId: '5b879d5dd1f79c0014a7353d',
            gstBusinessType: 'Regular GST Business',
            address: '36,Swami Dayanand Marg, 36,Swami Dayanand Marg, SHRI GANGANAGAR [ RAJ ]-335001',
            state: 'RJ',
            pincode: 335001,
            country: 'India',
            name: 'Aakash Ganga Cosmetics',
            id: '5b879d09d1f79c0014a7276a'
          },
          {
            aliasName: 'AGRA-A TO Z',
            primaryContactId: '5b879d14d1f79c0014a72cb9',
            gstBusinessType: 'Regular GST Business',
            address: '16/18,Satya Narayan Market, 16/18,Satya Narayan Market, Luhar Gali, Agra',
            state: 'UP',
            pincode: 0,
            country: 'India',
            name: 'AGRA-A TO Z IMMITATION JEWELLERS',
            id: '5b879d09d1f79c0014a7276b'
          },
          {
            aliasName: 'Raj',
            primaryContactId: '5b879d10d1f79c0014a72a38',
            gstBusinessType: 'Regular GST Business',
            address: 'Lohar Gali, Lohar Gali, 31/103,Vivek Complex, AGRA',
            state: 'UP',
            pincode: 0,
            country: 'India',
            name: 'AGRA KUMAR & BROS',
            id: '5b879d09d1f79c0014a7276c'
          }
        ]
}


class partyList extends Component {

    constructor(props){
            super(props)
            mThis=this
            this.state={
                data:jsonData.elements,
                searchInput:''
            }
            myViewWillAppear = mThis.props.navigation.getParam('myViewWillAppear',' ')
           
    }

    componentDidMount(){    
    }
    renderItem = ({item}) => {
          return(
            <TouchableOpacity
        activeOpacity = { .5 } onPress={()=>this.GetItem(item)}  delayPressIn={0}
           >
                {this.commonView(item)}
    
            </TouchableOpacity>
          );
    }

    GetItem = (item) => {
        this.props.setPartyDetails(item);
        this.props.navigation.navigate('check')
        console.log("Item",item)
    }

    componentWillUnmount(){
        myViewWillAppear('Second')

    }

    // renderHeader = () => {    
    //     return (      
    //       <SearchBar        
    //         placeholder="Type Here..."        
    //         lightTheme        
    //         round        
    //         // onChangeText={text => this.searchFilterFunction(text)}
    //         autoCorrect={false}             
    //       />    
    //     );  
    //   };

      searchFilterFunction = text => {    
        const newData = this.state.data.filter(item => {      
          const itemData = `${item.aliasName.toUpperCase()}   `
        //   ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
           const textData = text.toUpperCase();
            
           return itemData.indexOf(textData) > -1;    
        });    
        this.setState({ data: newData });  
      };

    commonView = (item) => {
        return(
            <View style={styles.listItemContainer}>
            <View style={styles.listItemTextViewContainer}>
              <View style={styles.listItemHeader}>
                <Text style={styles.listItemHeaderText}>{item.aliasName}</Text>
              </View>
              <View style={styles.listItemSubHeadererContainer}>
                  <Text style={styles.listItemSubHeader1}>{item.address}</Text>
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

      noPartyView = () => {
        return(
          <View style={{height: '100%', width: '100%', alignItems: 'center'}}>
           <View style={{height:50, justifyContent: 'center',flexDirection:'row', marginHorizontal: '2.5%'}}>
            <TouchableOpacity style={{}}  onPress={() => this.props.navigation.goBack(null)}>
            <Image style={{height: height*.04, width: height*.04  , marginLeft: height*.01,marginTop:12}} source={require('./BackArrows.png')}/>
            </TouchableOpacity>
            <Input   style={{alignSelf: 'center'}}
                        placeholder="Enter Party Name"
                        onChangeText={text => {
                            this.searchFilterFunction(text)
                        }}
                        borderColor='black' />
            </View>
            <Image style={{alignSelf: 'center', justifyContent: 'center',marginTop:'20%'}} source={require('./component.png')}/>
           <Text style={{fontSize: 20, }}> No Search Found for {this.state.data}  </Text>
          
           <TouchableOpacity
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonText}>+ Create Party</Text>
        </TouchableOpacity>
          </View>
        )
      }

      showPartyListView = () => {
        console.log("show car list View");
        return(
            <View style={{height: '100%', width: '100%'}}>
            <View style={{height:50, justifyContent: 'center',flexDirection:'row', marginHorizontal: '2.5%'}}>
            <TouchableOpacity style={{}}  onPress={() => this.props.navigation.goBack(null)}>
            <Image style={{height: height*.04, width: height*.04, marginLeft: height*.01,marginTop:12}} source={require('./BackArrows.png')}/>
            </TouchableOpacity>
            <Input   style={{alignSelf: 'center'}}
                        placeholder="Enter Party Name"
                        onChangeText={text => {
                            this.searchFilterFunction(text)
                        }}
                        borderColor='black' />
            </View>
      
            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                width: '100%',
              }}>
            </View>
            <View style={{height:'75%'}}>
       <FlatList
             extraData={this.state}
             style={styles.flatList}
             data={this.state.data.filter(item => item.aliasName.toLowerCase().includes(this.state.searchInput.toLowerCase()))}
             renderItem={this.renderItem}
             keyExtractor = {(item, index) => index.toString()}
             ItemSeparatorComponent = {this.renderSeparator}
             ListHeaderComponent={this.renderHeader}                             
           />
      </View>
      </View>
        );
      }

  render() {
    return (
  <View width="100%" height="100%">
    <Container>
    <StatusBar
       barStyle="light-content"
      // backgroundColor={color.primaryColorDark}
     />
     {(this.state.data.length<=0) ? this.noPartyView() : this.showPartyListView()}     
      </Container>
  </View>
    )
  }
}
  
  function mapDispatchToProps(dispatch) {
    return {
      setPartyDetails: (data) => dispatch(setPartyDetails(data))
    }
  }
//   const mapStateToProps= state => ({});

export default connect(null,mapDispatchToProps)(partyList)

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: "center",
        height: "8%",
        width: "70%",
        backgroundColor: "#C2185B",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginTop:10
      },
      buttonText: {
        textAlign: "center",
        fontSize: 16,
       // color: "#FFFFFF"
      },
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
    
   
    
     listItemContainer: {
       flexDirection: "row",
       marginHorizontal: "3%",
       borderRadius: 8,
       padding: 5,
       marginVertical: 5,
       elevation: 0
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
       //color: "black",
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
   
     listItemSubHeader1: {
       fontSize: 16
     },
     separator: {
        marginHorizontal: '2.5%'
      },
      separatorInside: {
        height: 1,
        width: '100%',
        backgroundColor: '#c5d5c5',
      },
   });
   