import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, {useState} from 'react'
import mail from '../../assets/img/mail.png'
import { responsive } from '../../shared/getResponsiveness'
import Button from '../../components/auth/Button'

export default function EmailVerification() {
    const [email, setEmail] = useState('')
  return (
    <View>
      <Image source={mail} style={styles.device}/>

      <Text style={styles.sign}>Email Address</Text>
      <Text style={{color: 'gray', marginLeft: responsive.number(20), marginTop: responsive.number(10)}}>We're going to send you a verification code to </Text>
      <Text style={{color: 'gray', marginLeft: responsive.number(20)}}>confirm your identity</Text>

      <TextInput
        placeholder='Email'
        value={email}
        onChange={setEmail}
        returnKeyType='done'
        style={styles.input}
      />

      <View style={{marginTop: '25%'}}> 
        <Button text="Verify"/>
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
    }
})