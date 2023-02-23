import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { windowHeight } from '../utils/Dimensions';

const FormButton = ({buttonTitle,...rest}) => {
  return (
    <TouchableOpacity {...rest}>
        <Text>{buttonTitle}</Text>
    </TouchableOpacity>
  )
}

export default FormButton;

const styles=StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:'#2e64e5',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
    },
    buttnText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff'
    }
})