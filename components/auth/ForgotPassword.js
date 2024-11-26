import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { responsive } from '../../shared/getResponsiveness'

const ForgotPassword = () => {
  return (
    <View>
      <Text style={{color: '#5B67F4', marginLeft: responsive.number(20), marginTop: responsive.number(20), fontWeight: 'bold'}}>Forgot password?</Text>
    </View>
  )
}


export default ForgotPassword