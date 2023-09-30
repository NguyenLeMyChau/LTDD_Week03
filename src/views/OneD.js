import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';


export default function OneD(){
  return (
    <View style = {styles.container}>
        
            <Text style = {styles.textLogin}>LOGIN</Text>

            <View style = {styles.boxEmail}>
               
               <TextInput 
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    value={'Email'}
                    style = {styles.txtEmail}
                />
               
            </View>

            <View style = {styles.boxPassword}>
               <View>
               <TextInput 
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    value={'Password'}
                    style = {styles.txtPassword}
                />

               </View>

               <View>
               <Image
                    source = {require('/src/images/eye.png')}
                    style = {styles.imgEye}
                />
               </View>
                
               
            </View>

            <TouchableOpacity style={styles.btnLogin}>
              <Text style = {[styles.txtLogin,styles.setColorWhile]}>LOGIN</Text>
            </TouchableOpacity>

            <Text style = {styles.textWhen}>When you agree to terms and conditions</Text>

            <Text style = {[styles.textFor,styles.setColorBlue]}>For got your password?</Text>
            <Text style = {styles.textOr}>Or login with</Text>
              
             <View>
                <View>
                <TouchableOpacity style={styles.btnFb}>
                <Image
                    source = {require('/src/images/icofacebook.png')}
                    style = {styles.imgFb}
                />
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={styles.btnZalo}>
                 <Image
                    source = {require('/src/images/icozalo.png')}
                    style = {styles.imgZalo}
                />
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity style={styles.btnGg}>
                <Image
                    source = {require('/src/images/icogoogle.png')}
                    style = {styles.imgGg}
                />
                </TouchableOpacity> 

                </View>

            </View> 
            

            

          
    </View>



  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#31AA5230'
    },
    
    textWhen:{
        width: '260px',
        height: '50px',
        top: '200px',
        left: '70px',
        fontFamilyamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.41px',
        textAlign: 'center'
      },

      textFor:{
        width: '260px',
        height: '50px',
        top: '180px',
        left: '70px',
        fontFamilyamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.41px',
        textAlign: 'center'
      },

      textOr:{
        width: '260px',
        height: '50px',
        top: '160px',
        left: '70px',
        fontFamilyamily: 'Roboto',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '16.41px',
        textAlign: 'center'
      },

    textLogin:{
      width: '90px',
      height: '29px',
      top: '40px',
      left: '145px',
      fontFamily: 'Roboto',
      fontSize: '25px',
      fontWeight: '700',
      lineHeight: '29.3px',
      textAlign: 'center'
    },

    btnLogin: {
      width: '305px',
      height: '45px',
      top: '180px',
      left: '40px',
      backgroundColor: '#E53935'
    },

    btnFb: {
        width: '110px',
        height: '60px',
        top: '150px',
        left: '30px',
        backgroundColor: '#3D85C6'

      },

      btnZalo: {
        width: '110px',
        height: '60px',
        top: '90px',
        left: '30px',
        marginLeft: '110px',
        backgroundColor: '#41A0D7'
      },

      btnGg: {
        width: '110px',
        height: '60px',
        top: '30px',
        left: '30px',
        marginLeft: '220px',
        borderWidth: 1,
        borderColor: '#41A0D7',
      },


    txtLogin:{
      width: '90px',
      height: '23px',
      top: '10px',
      fontFamily: 'Roboto',
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: '23px',
      textAlign: 'center',
      alignSelf: 'center'
    },

    setColorWhile :{
        color: '#FFFFFF'
    },

    setColorBlue :{
        color: 'blue'
    },


    boxEmail:{
      width: '305px',
      height: '45px',
      top: '90px',
      left: '40px',
      backgroundColor: '#c4c4c4'
      
    },

    boxPassword:{
        width: '305px',
        height: '45px',
        top: '120px',
        left: '40px',
        backgroundColor: '#C4C4C4'
      },

    txtEmail:{
      fontFamily: 'Roboto',
      fontSize: '20px',
      textAlign: 'left',
      padding: '10px',
      marginLeft: '5px'
    },

    txtPassword:{
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        padding: '10px',
        marginLeft: '5px'
      },
  

    imgEye:{
        width: '38px',
        height: '36px',
        alignSelf: 'flex-end',
        marginTop: '-60px',
        marginRight: '15px'
    },

    imgFb:{
        width: '38px',
        height: '36px',
        alignSelf: 'center',
        marginTop: '10px',
        marginRight: '10px'
    },

    imgZalo:{
        width: '25px',
        height: '30px',
        alignSelf: 'center',
        marginTop: '15px',
        marginRight: '5px'
    },

    imgGg:{
        width: '35px',
        height: '35px',
        alignSelf: 'center',
        marginTop: '10px',
    }

    
});