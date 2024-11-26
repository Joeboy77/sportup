import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import { responsive } from '../../shared/getResponsiveness'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.sign}>Sign In</Text>
      <Text style={styles.let}>Let’s sign in with your Fitline account</Text>

      <View style={{marginTop: responsive.number(30), display: 'flex', gap: responsive.number(10)}}>
        <TextInput
        placeholder='Email'
        style={styles.emailInput}
        value={email}
        onChange={setEmail}
        autoComplete='email'
        returnKeyType='next'
        inputMode='email'
        keyboardAppearance='dark'
        />

        <TextInput 
        placeholder='Password'
        style={styles.emailInput}
        value={password}
        onChange={setPassword}
        returnKeyType='done'
        keyboardAppearance='dark'
        secureTextEntry
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    sign: {
        marginTop: responsive.number(100),
        marginLeft: responsive.number(20),
        fontSize: responsive.fontSize(24),
        fontWeight: 'bold'
    },
    let: {
        marginLeft: responsive.number(20),
        marginTop: responsive.number(10)
    },
    emailInput: {
        width: responsive.number(327),
        height: responsive.number(56),
        backgroundColor: "#F8FAFC",
        paddingLeft: responsive.number(10),
        marginLeft: responsive.number(20),
        
    }
})
export default SignIn