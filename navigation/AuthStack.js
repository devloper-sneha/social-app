import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import { Icon } from '@rneui/themed';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

import React, { useEffect, useState } from 'react'
import SignUpScreen from '../screens/SignUpScreen';
import { TouchableOpacity } from 'react-native';

const LeftHeader = () => {
    return (
        <TouchableOpacity>
            <Icon
                name='arrow-left'
                size={25}
                backgroundColor='#f9fafd'
                onPress={() => navigation.navigate('Login')}
            />
        </TouchableOpacity>
    )
}
const AppStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Onboarding'
                component={OnboardingScreen}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    header: () => null
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    title: 'Sign Up',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0
                    }
                }}
            />
        </Stack.Navigator>
    );
}
const UnAuthStack = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    header: () => null
                }}
            />

        </Stack.Navigator>
    )
}

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            } else {
                setIsFirstLaunch(false)
            }
        });
        GoogleSignin.configure({
            webClientId: '301692874328-eq2evepf5d3s072avh5ov62rlsjbikdh.apps.googleusercontent.com',
          });
    }, []);
    // if (isFirstLaunch === true) {
    //     return (

    //     );
    // } else {
    //     return (
    //         <UnAuthStack />
    //     )
    // }
    return (
        <AppStack />
    )
}

export default AuthStack;