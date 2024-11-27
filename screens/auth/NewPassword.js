import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import lock from '../../assets/img/lock.png'
import { responsive } from '../../shared/getResponsiveness'
import Button from '../../components/auth/Button'

export default function NewPassword() {
    const [password, setPassword] = useState('')
  return (
    <View>
        <Image source={lock} style={styles.device}/>

        <Text style={styles.sign}>Reset Password</Text>
        <Text style={{color: 'gray', marginLeft: responsive.number(20), marginTop: responsive.number(10)}}>Enter the email associated with your account and </Text>
        <Text style={{color: 'gray', marginLeft: responsive.number(20)}}>we'll send an email to reset your password.</Text>

        <TextInput
        placeholder='Password'
        value={password}
        onChange={setPassword}
        returnKeyType='next'
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChange={setPassword}
        returnKeyType='next'
        secureTextEntry
        style={styles.input1}
      />

      <View style={{marginTop: '4%'}}>
        <Button text="Reset Password" />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    device: {
        marginTop: responsive.number(100),
        marginLeft: responsive.number(30)
    },
    sign: {
        marginTop: responsive.number(20),
        marginLeft: responsive.number(20),
        fontSize: responsive.fontSize(24),
        fontWeight: 'bold'
    },
    input: {
        width: responsive.number(327),
        height: responsive.number(56),
        borderColor: '#CBD5E1',
        backgroundColor: '#F9FAFB',
        paddingLeft: responsive.number(20),
        borderRadius: responsive.number(12),
        borderWidth: 1,
        marginTop: responsive.number(40),
        alignSelf: 'center'
    },
    input1: {
        width: responsive.number(327),
        height: responsive.number(56),
        borderColor: '#CBD5E1',
        backgroundColor: '#F9FAFB',
        paddingLeft: responsive.number(20),
        borderRadius: responsive.number(12),
        borderWidth: 1,
        marginTop: responsive.number(10),
        alignSelf: 'center'
    }
})