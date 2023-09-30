import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import React, { useMemo, useState } from 'react';
import { RadioButton } from 'react-native-paper';


export default function OneD(){
  const [selectedValue, setSelectedValue] = useState('option1');

  return (
    <View style = {styles.container}>
        
            <Text style = {styles.txtRegister}>REGISTER</Text>

            <View style = {styles.boxName}>
               <View>
               <TextInput 
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    value={'Name'}
                    style = {styles.txtPassword}
                />

               </View>
               
            </View>

            <View style = {styles.boxPhone}>
               <View>
               <TextInput 
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    value={'Phone'}
                    style = {styles.txtPassword}
                />

               </View>
               
            </View>

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

            <View style = {styles.boxBirthday}>
               <View>
               <TextInput 
                    editable
                    multiline
                    onChangeText={text => onChangeText(text)}
                    value={'Birthday'}
                    style = {styles.txtPassword}
                />

               </View>
               
            </View>

            

            <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option1"
                        status={selectedValue === 'option1' ? 
                                'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option1')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Male
                    </Text>
                </View>
  
                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="option2"
                        status={selectedValue === 'option2' ? 
                                 'checked' : 'unchecked'}
                        onPress={() => setSelectedValue('option2')}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Female
                    </Text>
                </View>
                </View>

          

            <TouchableOpacity style={styles.btnRegister}>
              <Text style = {[styles.btnRegistertxt,styles.setColorWhile]}>REGISTER</Text>
            </TouchableOpacity>

            <Text style = {styles.textWhen}>When you agree to terms and conditions</Text>

              
            
            

            

          
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

      txtRegister:{
      width: '150px',
      height: '29px',
      top: '40px',
      left: '120px',
      fontFamily: 'Roboto',
      fontSize: '25px',
      fontWeight: '700',
      lineHeight: '29.3px',
      textAlign: 'center'
    },

    btnRegister: {
      width: '310px',
      height: '45px',
      top: '190px',
      left: '40px',
      backgroundColor: '#E53935'
    },


    btnRegistertxt:{
      width: '150px',
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
      top: '130px',
      left: '40px',
      backgroundColor: '#c4c4c4'
      
    },

    boxPassword:{
        width: '305px',
        height: '45px',
        top: '150px',
        left: '40px',
        backgroundColor: '#C4C4C4'
      },

      boxName:{
        width: '305px',
        height: '45px',
        top: '90px',
        left: '40px',
        backgroundColor: '#c4c4c4'
        
      },

      boxPhone:{
        width: '305px',
        height: '45px',
        top: '110px',
        left: '40px',
        backgroundColor: '#c4c4c4'
        
      },

      boxBirthday:{
        width: '305px',
        height: '45px',
        top: '170px',
        left: '40px',
        backgroundColor: '#c4c4c4'
        
      },

      radioGroup: {
        flexDirection: 'row',
        borderRadius: 8,
        padding: 16,
        elevation: 4,
        top: '170px',
        left: '20px',
    },

    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    radioLabel: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
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

    
});