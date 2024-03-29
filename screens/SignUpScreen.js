import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AppProvider';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {register,googleLogin}=useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeHolderText="Email"
        iconType="person"
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
      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeHolderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => register(email,password)}
      />
      <View style={styles.textPrivate} onPress={() => { }}>
        <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
        <TouchableOpacity onPress={()=>alert("Terms of service")}>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of Service</Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity onPress={()=>alert("TPrivacy Policy")}>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy.</Text>
        </TouchableOpacity>
      </View>
      <SocialButton
        buttonTitle="Sign In with Facebook"
        buttonType="facebook"
        onPress={() => { }}
      />
      <SocialButton
        buttonTitle="Sign In with Google"
        buttonType="google"
        onPress={() => {()=>googleLogin()}}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.navButtonText}>Have an account? Login here.</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUpScreen;
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
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});