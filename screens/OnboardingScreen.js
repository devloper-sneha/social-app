import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { Image ,Button} from 'react-native';

export const OnboardingScreen = ({navigation}) => {
    const Skip=({...props})=>{
        <Button
        title='Skip'
        color="#000000"
        {...props}
        />
      }
    return (
        <Onboarding
            onSkip={()=>navigation.replace('Login')}
            onDone ={()=>navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Connect to the World',
                    subtitle: 'A New Way To Connect With The World',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Share Your Favorites',
                    subtitle: 'Share Your Thoughts With Similar Kind of People',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Become The Star',
                    subtitle: "Let The Spot Light Capture You",
                },
            ]}
        />
    );
}
