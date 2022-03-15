import { useRoute } from "@react-navigation/native";
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, FlatList, Image} from 'react-native';
import { Icon } from 'react-native-eva-icons';


const Detail = () => {

  const route = useRoute();
  // const [filterData, setfilterData] = useState([]);
  // const [masterData, setmasterData] = useState([]);
  // const [search, setSearch] = useState('');

  // useEffect(() =>{
  //   fetchPosts();
  //   return () => {

  //   }
  // }, [])

  // const fetchPosts = () => {
  //     const apiURL = 'https://jsonplaceholder.typicode.com/posts';
  //     fetch(apiURL)
  //     .then((response) => response.json()) // get response, convert to json
  //     .then((responseJson) => {
  //       setfilterData(responseJson);
  //       setmasterData(responseJson);
  //     }).catch((error) => {
  //       console.error(error);
  //     })   
  // }

  // const searchFilter = (text) => {
  //   if (text) {
  //     const newData = masterData.filter((item) =>{
  //       const itemData = item.title ?
  //         item.title.toUpperCase():
  //          ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setfilterData(newData);
  //     setSearch(text);
  //   }else{
  //     setfilterData(masterData);
  //     setSearch(text);
  //   }
  // }

  // const ItemView = ({item}) => {
  //   return (
  //     <Text style={styles.itemStyle}>
  //         {item.id}{'. '}{item.title.toUpperCase()}
  //       </Text>
  //   )
  // }

  // const ItemSeparatorView = () =>{
  //   return (
  //   <View
  //   style={{height:0.5, width:'100%', backgroundColor:'#c8c8c8'}}
  //   />
  //   )
  // }

  return (

      <SafeAreaView style={{flex:1}}>
        <View>
        <View style={styles.layout1}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>     
            <View style={{height: 50, width: 50}}>
              <Icon name='menu-outline' fill='white' height={40} />
            </View>          
            <View style={{height: 50, width: 50}}>
              <Icon name='person-outline' fill='white'  height={30} />
            </View>        
          </View>
        
          <View style={{marginTop:-30}}>
            <Text style={styles.title}>
              GTic.com
            </Text>
            <View style={styles.info}>
              <Text style={{textAlign:'center', fontWeight:'bold', color : "white",}}>
                Hasil Pencarian Penerbangan
              </Text>
              <Text style={{textAlign:'center', fontWeight:'bold', color : "white",}}>
                (Tanggal Keberangkatan)
              </Text>
            </View>
          </View>
        </View>

        {/* <TextInput
          style ={styles.textInputStyle}
          value ={search}
          placeholder="search here"
          underlineColorAndroid="transparent"
          onChangeText={(text) => searchFilter(text)}
        /> */}
        
              {/* <FlatList
                data={filterData}
                keyExtractor = {(item, index) => index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
              /> */}

        <View style={styles.list}>
              <View style={styles.styleList}>
                <Text style={{fontWeight:'bold'}}>
                  {route.params.bandara_keberangkatan}
                </Text> 
                <Text  style={{marginLeft:40, fontWeight:'bold'}}>
                  -  
                </Text>
                <Text style={{marginLeft :40, fontWeight:'bold'}}>
                  {route.params.bandara_tujuan}
                </Text>
              </View>
              <View style={styles.sectionStyle}>

              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/633/633800.png'}}
                style={styles.imageStyle}
                />
                <Text style={{marginLeft:10}}>Garuda</Text>   
                <Text style={{marginLeft:75}}>{route.params.jadwal_berangkat}</Text>
              </View>
        </View>

        </View>

        <View style={styles.layout2}>
                <Text style={styles.copyright}>
                    Copyright Joy Ravelo Tarigan - 119140037        
                </Text>
            </View>
        
      </SafeAreaView>
  );
};
export default Detail;

const styles = StyleSheet.create({
    container : {
      backgroundColor : "white",
    },
    itemStyle : {
      padding:10
    },
    
    layout1 : {
      backgroundColor : '#32cd32',
      height:150
    },
  
    layout2 : {
      textAlign:'center',
    },
  
    title: {
      color : "white",
      fontWeight : "bold",
      fontSize: 36,
      textAlign : "center",
    },
  
    copyright: {
      textAlign: 'center',
      marginTop: 170,
    },
  
    textInputStyle : {
      height :40,
      borderWidth :1,
      paddingLeft :20,
      margin : 5,
      borderColor : '#009688',
      backgroundColor : 'white'
    },
  
    list : {
      padding : 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: 90,
      borderRadius: 10,
      margin: 5,
      width:350,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
  
    styleList : {
      marginLeft:10,
      marginTop:10,
      flexDirection: 'row',
      borderColor: 'white',
      borderRadius: 5,
      width:280,    
    },
  
    imageStyle: {
      padding: 10,
      height: 30,
      width: 30,
    },
  
    sectionStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 0.5,
      borderColor: 'white',
      margin: 10,
      marginLeft:-25
  
    },
  
  });