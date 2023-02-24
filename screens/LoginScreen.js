import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import { logo } from '../utils/assets';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text>Social App</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeHolderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeHolderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign In"
        onPress={()=>Alert.alert("Hello")}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9faf',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover'
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
  }
});