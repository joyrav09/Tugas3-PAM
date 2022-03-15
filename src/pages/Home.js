import { useNavigation} from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity, Image} from "react-native";
import { Icon } from 'react-native-eva-icons';
import DatePicker from 'react-native-datepicker';

const Home = () => {

    const [bandara_kode_keberangkatan, setLoc] = useState('');
    const [bandara_kode_tujuan, setLocTo] = useState('');
    const [jadwal_id, setDate] = useState('09-10-2021');

    const navigation = useNavigation();

    const buttonClickListener = () =>{
        navigation.navigate("Detail", {
            bandara_keberangkatan : bandara_kode_keberangkatan,
            bandara_tujuan : bandara_kode_tujuan,
            jadwal_berangkat : jadwal_id,
        });
    }

    return (
        <View style={styles.container}>

            <StatusBar 
                barStyle = "dark-content"
                hidden = {false}
                backgroundColor = "#00BCD4"
                translucent = {false}
                networkActivityIndicatorVisible = {true}
            />
            
            <View style={styles.layout1}>
                <View style={{marginTop:10}}>    
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>     
                        <View style={{height: 50, width: 50}}>
                            <Icon name='menu-outline' fill='white' height={40} />
                        </View>          
                        <View style={{height: 50, width: 50}}>
                            <Icon name='person-outline' fill='white'  height={30} />
                        </View>        
                    </View>
                    
                    <View style={{marginTop:-10}}>
                        <Text style={styles.title}>
                            GTic.com
                        </Text>
                    </View>
                </View>

                <View style={styles.formBooking}>
                    <View style={{padding:12, marginTop:-15}}>
                        <View style={{marginBottom:35}}>
                            <View> 
                                <Text style={{padding:5, marginBottom: 15, fontWeight:"bold"}}>
                                    Lokasi Keberangkatan
                                </Text>

                                <SafeAreaView style={{flex: 1}}>
                                    <View style={styles.icon1}>
                                        <View style={styles.sectionStyle}>
                                            <Image
                                                source={{ uri: 'https://cdn-icons.flaticon.com/png/512/716/premium/716571.png?token=exp=1647173359~hmac=ba539a12e7d1908095f727401c055f03' }}
                                                style={styles.imageStyle}
                                                />   
                                                <TextInput
                                                    style={{flex:1}}
                                                    value={bandara_kode_keberangkatan}
                                                    placeholder="Lokasi Keberangkatan"
                                                    onChangeText={ bandara_kode_keberangkatan => 
                                                        setLoc (bandara_kode_keberangkatan) }
                                                />
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </View>

                            <View style={{marginTop:35}}> 
                                <Text style={{padding:5, marginBottom: 15, fontWeight:"bold"}}>
                                    Lokasi Tujuan
                                </Text>       
                                <SafeAreaView style={{flex: 1}}>
                                    <View style={styles.icon1}>
                                        <View style={styles.sectionStyle}>
                                        <Image
                                                source={{ uri: 'https://cdn-icons.flaticon.com/png/512/716/premium/716570.png?token=exp=1647174915~hmac=836b7c9498b5127b508c532b31f07f92' }}
                                                style={styles.imageStyle}
                                                />   
                                            <TextInput
                                                style={{flex:1}}
                                                value={bandara_kode_tujuan}
                                                placeholder="Lokasi Tujuan"
                                                onChangeText={  bandara_kode_tujuan => 
                                                    setLocTo(bandara_kode_tujuan)}
                                            />
                                        </View>
                                    </View>
                                </SafeAreaView>
                            </View>
                        </View>
                        
                        <View style={{marginLeft:-5}}> 
                            <Text style={{padding:9, marginBottom:-9, fontWeight:"bold"}}>
                                Tanggal Keberangkatan
                            </Text>
                            <View style={styles.sectionStyle}>
                                <DatePicker style={{flex:1}}
                                    date={jadwal_id} //initial date from state
                                    mode="date" //The enum of date, datetime and time
                                    placeholder="select date"
                                    format="DD-MM-YYYY"
                                    minDate="01-01-2021"
                                    maxDate="01-01-2030"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                        //display: 'none',
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0,
                                        },
                                        dateInput: {
                                        height:46,
                                        borderRadius:5
                                        
                                        },
                                        }}
                                        
                                    onDateChange={(jadwal_id) => {
                                        setDate(jadwal_id);
                                    }}>
                                        
                                </DatePicker>
                            </View>
                        </View>
                        
                        
                        <View style={{marginTop:10}}>
                            <TouchableOpacity onPress={() => buttonClickListener()}>
                                <Text style={styles.buttonSearch}>
                                    Cari Jadwal
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
                            
            <View style={styles.layout2}>
                <Text style={styles.copyright}>
                    Copyright Joy Ravelo Tarigan - 119140037        
                </Text>
            </View>
        
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    icon1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }, 

      sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 45,
        borderRadius: 5,
        margin: 10,
        width:265
      },

      imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },

    title: {
        color : "white",
        fontWeight : "bold",
        fontSize: 36,
        textAlign : "center",
    },

    layout1: {
        backgroundColor: "#32cd32",
        height: 420,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    
    formBooking: {
        justifyContent : "center",
        marginTop: 15,
        margin: 30,
        borderRadius: 12,
        width: 300, 
        height: 380, 
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    copyright: {
        textAlign: 'center',
        marginTop: 150,
    },
    buttonSearch : {
        borderRadius: 10,
        borderColor: 'white',
        color : "white",
        fontWeight : "bold",
        backgroundColor : "#00bfff",
        padding:12, 
        textAlign:"center",  
        borderWidth: 1,
    }
});