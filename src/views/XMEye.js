import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';


export default function OneD(){
  return (
    <View style = {styles.container}>
        
            <Image
                    source = {require('/src/images/eyeball.png')}
                    style = {styles.imgEyeBall}
                />
            
            <View style = {styles.boxName}>

                <View>
                <Image
                    source = {require('/src/images/group3.png')}
                    style = {styles.imgAvatar}
                />
                </View>
            
               <View>
               <TextInput
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    style = {styles.txtName}
                />
                </View>

                <Text style = {{fontSize: '20px', marginLeft: '60px', marginTop: '-36px', color: '#C4C4C4'}}>Please input username</Text>

            </View>

            

            <View style = {styles.boxPassword}>

            <Text style = {{fontSize: '20px', marginLeft: '60px', marginTop: '10px', color: '#C4C4C4'}}>Please input password</Text>

            
            <View>
               <Image
                    source = {require('/src/images/group5.png')}
                    style = {styles.imgLock}
                />
            </View>

               

            <View>
               <Image
                    source = {require('/src/images/eye.png')}
                    style = {styles.imgEye}
                />
            </View>

            <View>
            <TextInput 
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    style = {styles.txtPassword}
                />
            </View>
               

               
            </View>

            <TouchableOpacity style={styles.btnLogin}>
              <Text style = {[styles.txtLogin,styles.setColorWhile]}>LOGIN</Text>
            </TouchableOpacity>
        
            
            

          
    </View>



  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },


    
    textLogin:{
      width: '120px',
      height: '100px',
      marginTop: '20px',
      left: '50px',
      fontFamily: 'Roboto',
      fontSize: '30px',
      fontWeight: '700',
      lineHeight: '35.16px',
      textAlign: 'center',
      alignSelf: 'center'
    },

    btnLogin: {
      width: '330px',
      height: '55px',
      top: '150px',
      left: '35px',
      backgroundColor: '#386FFC',
      borderRadius: '10px',
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


    boxName:{
      width: '330px',
      height: '54px',
      top: '80px',
      left: '35px',
      borderBottomWidth: 1,
      borderColor: '#C4C4C4',
        
    },

    boxPassword:{
      width: '330px',
      height: '54px',
      top: '100px',
      left: '35px',
      borderBottomWidth: 1,
      borderColor: '#C4C4C4',
      },

    txtName:{
      width: '270px',
      height: '45px',
      fontFamily: 'Roboto',
      fontSize: '20px',
      textAlign: 'left',
      marginLeft: '60px',
      marginTop: '-45px'    
    },

    txtPassword:{
        width: '262px',
        height: '45px',
        fontFamily: 'Roboto',
        fontSize: '20px',
        textAlign: 'left',
        marginLeft: '60px',
        marginTop: '-70px',
      },
  

    imgAvatar:{
        width: '40px',
        height: '40px',
        marginTop: '7px',
        marginLeft: '10px'      
       
    },

    imgLock:{
        width: '35px',
        height: '36px',
        alignSelf: 'flex-start',
        marginLeft: '10px',
        top: '-27px'
    },

    imgEyeBall:{
        width: '140.19px',
        height: '141.2px',
        top: '33px',
        left: '125px',
        padding: '17px, 14px, 17px, 14px',
        gap: '10px'

    }

  

    
});