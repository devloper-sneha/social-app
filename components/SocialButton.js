import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { windowHeight } from '../utils/Dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const SocialButton = ({ buttonTitle, color, buttonType, backgroundColor, ...rest }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: backgroundColor }]} {...rest}>
            <View style={styles.iconWrapper}>
                <Icon name={buttonType} size={22} color={color} style={styles.icon} />
            </View>
            <View style={styles.btnTextWrapper}>
                <Text style={[styles.buttonText,{color:color}]}>{buttonTitle}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
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