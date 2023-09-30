import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';


export default function OneD(){
  return (
    <View style = {styles.container}>
        
            <Text style = {styles.textLogin}>LOGIN</Text>

            
            <View style = {styles.boxName}>

                <View>
                <Image
                    source = {require('/src/images/avatar.png')}
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

                <Text style = {{fontSize: '20px', marginLeft: '60px', marginTop: '-36px'}}>Name</Text>

            </View>

            

            <View style = {styles.boxPassword}>

            <Text style = {{fontSize: '20px', marginLeft: '60px', marginTop: '10px'}}>Password</Text>

            
            <View>
               <Image
                    source = {require('/src/images/lock.png')}
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

           <Text style = {styles.create}>CREATE ACCOUNT</Text>
            

          
    </View>



  );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FBCB00'
    },

    create: {
        width: '350px',
        height: '45px',
        top: '270px',
        left: '35px',
        fontSize: '30px',
        textAlign: 'center'
      },
    
    textLogin:{
      width: '120px',
      height: '29px',
      top: '82px',
      left: '30px',
      fontFamily: 'Roboto',
      fontSize: '30px',
      fontWeight: '700',
      lineHeight: '35.16px',
      textAlign: 'center'
    },

    btnLogin: {
      width: '330px',
      height: '45px',
      top: '220px',
      left: '35px',
      backgroundColor: '#060000'
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
      top: '150px',
      left: '35px',
      borderWidth: 1,
      borderColor: '#F2F2F2',
        
    },

    boxPassword:{
      width: '330px',
      height: '54px',
      top: '170px',
      left: '35px',
      borderWidth: 1,
      borderColor: '#F2F2F2',
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
  

    imgEye:{
        width: '38px',
        height: '36px',
        alignSelf: 'flex-end',
        marginTop: '-60px',
        marginRight: '15px'
    },

    imgAvatar:{
        width: '40px',
        height: '40px',
        marginTop: '7px',
        marginLeft: '10px'      
       
    },

    imgLock:{
        width: '30px',
        height: '36px',
        alignSelf: 'flex-start',
        marginLeft: '10px',
        top: '-27px'
    },

  

    
});