import React, { useContext, useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AppProvider';
import { logo } from '../utils/assets';

const LoginScreen = ({ navigation }) => {
  const {login,googleLogin}=useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.text}>Social App</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeHolderText="Email"
        iconType="mail"
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
        onPress={() =>login(email,password)}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <SocialButton
        buttonTitle="Sign In with Facebook"
        buttonType="facebook"
        onPress={() => { }}
      />
      <SocialButton
        buttonTitle="Sign In with Google"
        buttonType="google"
        onPress={() => {()=>googleLogin() }}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
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