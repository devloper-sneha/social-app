import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardingScreen } from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';

const Auth = createNativeStackNavigator();

import React from 'react'

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
        })
    }, []);
    if (isFirstLaunch === true) {
        return (
            <NavigationContainer>
                <Auth.Navigator>
                    <Auth.Screen name='Onboarding' component={OnboardingScreen} />
                    <Auth.Screen name='Login' component={LoginScreen} />
                </Auth.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <LoginScreen />
        )
    }
}

export default AuthStack;