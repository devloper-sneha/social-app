import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { windowHeight } from '../utils/Dimensions';
import { SocialIcon } from '@rneui/themed';

const SocialButton = ({ buttonTitle, buttonType, ...rest }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
                <SocialIcon
                  type={buttonType}
                  onPress={() => {
                    alert({buttonTitle});
                  }}
                />
                <Text style={{textAlign: 'center'}}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        flexDirection: 'column'
    },
    iconWrapper:{
        width:30,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        fontWeight:'bold'
    },
    btnTextWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})