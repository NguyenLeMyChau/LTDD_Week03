import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

export default function OneB(){
  return (
    <View style = {styles.container}>
            <Image
              source = {require('/src/images/lock.png')}
              style = {styles.img}
            />
        
            <Text style = {styles.text1}>FORGET{'\n'}PASSWORD</Text>

            <Text style = {styles.text2}>Provide your account’s email for which you want to reset your password</Text>

            <View style = {styles.boxEmail}>
                <View>
                  <Image
                    source = {require('/src/images/mail.png')}
                    style = {styles.imgEmail}
                /></View>

                <View>
                    <TextInput 
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    value={'Email'}
                    style={styles.txtEmail}/>
                </View>
            

                
            </View>

            <TouchableOpacity style={styles.btnNext}>
              <Text style = {styles.textNext}>NEXT</Text>
            </TouchableOpacity>

              
    </View>



  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundImage: 'linear-gradient(180deg, #C7F4F7 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)'
    },

    img:{
      width: '130px',
      height: '150px',
      top: '100px',
      left: '120px',
      border: '15px',
    },

    text1:{
      width: '189px',
      height: '58px',
      top: '150px',
      left: '95px',
      fontFamily: 'Roboto',
      fontSize: '25px',
      fontWeight: '700',
      lineHeight: '29.3px',
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


    boxEmail:{
      width: '305px',
      height: '45px',
      top: '210px',
      left: '40px',
      backgroundColor: '#C4C4C4'
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