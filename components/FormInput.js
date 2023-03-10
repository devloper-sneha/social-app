import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { windowHeight, windowWidth } from '../utils/Dimensions';

const FormInput = ({ labelValue, placeHolderText, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <Icon name={iconType} size={25} color="#666" type='material-icon' />
            </View>
            <TextInput
                style={styles.input}
                value={labelValue}
                numberOfLines={1}
                placeholder={placeHolderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    )
}

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        // fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center'

    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
}); 