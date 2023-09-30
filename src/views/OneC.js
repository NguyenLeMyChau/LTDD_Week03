import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import OtpInput from 'react-otp-input';

export default function OneC(){
    const [otp, setOtp] = useState('');
  return (
    <View style = {styles.container}>

        
            <Text style = {styles.textCode}>CODE</Text>

            <Text style = {styles.textVer}>VERIFICATION</Text>

            <Text style = {styles.text2}>
                Enter ontime password sent on ++849092605798</Text>
                
            <View style = {styles.boxOTP}>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
            />
            <StatusBar style="auto" />

            </View>
            

            <TouchableOpacity style={styles.btnNext}>
              <Text style = {styles.textNext}>VERIFY CODE</Text>
            </TouchableOpacity>

              
    </View>



  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)'
    },


    textCode:{
      width: '200px',
      height: '70px',
      top: '113px',
      left: '93px',
      fontFamily: 'Roboto',
      fontSize: '60px',
      fontWeight: '700',
      lineHeight: '70.31px',
      textAlign: 'center'
    },

    textVer:{
        width: '200px',
        height: '70px',
        top: '170px',
        left: '93px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontWeight: '700',
        lineHeight: '23.44px',
        textAlign: 'center'
      },

    text2:{
      width: '330px',
      height: '50px',
      top: '185px',
      left: '30px',
      fontFamilyamily: 'Roboto',
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: '18px',
      textAlign: 'center'

    },

    btnNext: {
      width: '305px',
      height: '45px',
      top: '250px',
      left: '40px',
      borderRadius: '10px',
      backgroundColor: '#E3C000'
    },


    textNext:{
      width: '200px',
      height: '23px',
      top: '13px',
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '23px',
      textAlign: 'center',
      color: 'black',
      alignSelf: 'center'

    },


    boxOTP:{
      width: '300px',
      height: '50px',
      top: '210px',
      left: '40px',
      justifyContent: 'space-around',
      alignItems: 'center',      
    },

    txtEmail:{
      fontFamily: 'Roboto',
      fontSize: '20px',
      textAlign: 'left',
      padding: '10px',
      marginTop: '-45px',
      marginLeft: '40px'
    },

    imgEmail:{
      width: '48px',
      height: '45px'
    }


    
});