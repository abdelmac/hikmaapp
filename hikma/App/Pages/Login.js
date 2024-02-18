import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Colors from './../Shared/Colors';

export default function Login() {
  return (
    <View>
      <Image source={require('./../../assets/images/login.png')} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Start de aventure</Text>
        <Text style={{textAlign:'center',marginTop:40,fontSize:25}}>Login/Signup</Text>
        <Text style={styles.button}>Sign in with Google</Text>
      </View>
      
      
    </View>
  )
};


const styles = StyleSheet.create({
  container:{
    paddingTop:40,
    marginTop: -20,
    backgroundColor: '#fff',
    borderTopRightRadius:20,
    borderTopLeftRadius:30,
    borderBottomStartRadius:20,
  },
  welcomeText:{
    fontSize:35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button:{
    backgroundColor:Colors.primary,
    textAlign:'center',
  },
});