import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { responsive } from '../../shared/getResponsiveness'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
  const navigation = useNavigation()

  const handleClick = () => {
    navigation.navigate('ForgotPassword')
  }
  return (
    <Pressable onPress={handleClick}>
      <Text  style={{color: '#5B67F4', marginLeft: responsive.number(20), marginTop: responsive.number(20), fontWeight: 'bold'}}>Forgot password?</Text>
    </Pressable>
  )
}


export default ForgotPassword