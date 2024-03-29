import React, { useContext } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AppProvider';

const HomeScreen = () => {
  const {logout}=useContext(AuthContext);
  return (
   <SafeAreaView>
    <View style={styles.container}>
    <Text style={{color:'#000',marginTop:70}}>HomeScreen</Text>
    <FormButton buttonTitle="Logout" onPress={()=>logout()} />
    </View>
   </SafeAreaView>
  )
}

export default HomeScreen;

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#f9fafd',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },

})