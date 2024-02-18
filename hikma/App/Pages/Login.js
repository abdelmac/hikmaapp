import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View>
      <Image source={require('./../../assets/images/login.png')} />
      <Text style={styles.welcomeText}>Login now </Text>
      
    </View>
  )
};


const styles = StyleSheet.create({
  welcomeText:{
    fontSize:35,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});