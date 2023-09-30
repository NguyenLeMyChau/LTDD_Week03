import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function OneA(){
  return (
    <View style = {styles.container}>
            <Image
              source = {require('/src/images/cicle.png')}
              style = {styles.img}
            />
        
            <Text style = {styles.text1}>GROW{'\n'}YOUR BUSINESS</Text>

            <Text style = {styles.text2}>We will help you to grow your business using online server</Text>
      
            <TouchableOpacity style={styles.btnLogin}>
              <Text style = {styles.textLogin}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSignUp}>
              <Text style = {styles.textSignUp}>SIGN UP</Text>
            </TouchableOpacity>   

            <Text style = {styles.text3}>HOW WE WORK?</Text>
    </View>



  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)'
    },

    img:{
      width: '140px',
      height: '140px',
      top: '105px',
      left: '120px',
      border: '15px',
    },

    text1:{
      width: '189px',
      height: '58px',
      top: '150px',
      left: '95px',
      fontFamily: 'Roboto',
      fontSize: '23px',
      fontWeight: '700',
      lineHeight: '29.3px',
      textAlign: 'center'
    },

    text2:{
      width: '302px',
      height: '36px',
      top: '200px',
      left: '50px',
      fontFamilyamily: 'Roboto',
      fontSize: '15px',
      fontWeight: '700',
      lineHeight: '18px',
      textAlign: 'center'

    },

    text3:{
        width: '302px',
        height: '53px',
        top: '245px',
        left: '47px',
        fontFamilyamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21px',
        textAlign: 'center'
      },

    btnLogin: {
      width: '119px',
      height: '48px',
      top: '250px',
      left: '50px',
      borderRadius: '10px',
      backgroundColor: '#E3C000'
    },

    btnSignUp: {
      width: '119px',
      height: '48px',
      top: '200px',
      left: '220px',
      borderRadius: '10px',
      backgroundColor: '#E3C000'
    },

    textLogin:{
      width: '90px',
      height: '23px',
      top: '15px',
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '23px',
      textAlign: 'center',
      color: 'black',
      alignSelf: 'center'

    },

    textSignUp:{
      width: '90px',
      height: '23px',
      top: '15px',
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '23px',
      textAlign: 'center',
      color: 'black',
      alignSelf: 'center'

    }

    
});