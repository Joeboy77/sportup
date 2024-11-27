import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import { responsive } from '../../shared/getResponsiveness'
import Button from '../../components/auth/Button'
import OrSign from '../../components/auth/OrSign'
import AppleGoogle from '../../components/auth/AppleGoogle';
import appleLogo from '../../assets/img/apple.png'
import googleLogo from '../../assets/img/google.png'
import Donot from '../../components/auth/Donot'

export default function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <View>
      <Text style={styles.sign}>Sign Up</Text>
      <Text style={styles.let}>Let’s sign in with your Fitline account</Text>

      <View style={{marginTop: responsive.number(30), display: 'flex', gap: responsive.number(10)}}>
      <TextInput
        placeholder='Username'
        style={styles.emailInput}
        value={username}
        onChange={setUsername}
        returnKeyType='next'
        keyboardAppearance='dark'
        />
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

      <Button text="Continue"/>

      <OrSign />

      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginLeft: responsive.number(20), marginRight: responsive.number(20)
      }}>
      <AppleGoogle logo={appleLogo} text="Apple"/>
      <AppleGoogle logo={googleLogo} text="Google"/>
      </View>

      <View style={{marginTop: responsive.number(40)}}> 
        <Donot text="Sign In" high="Already have an account?"/>
      </View>
      
      <View style={{marginTop: '20%'}}>
      <Text style={{alignSelf: 'center', color: 'gray'}}>By continuing forwards, you agree to Fitline's</Text>
      <Text style={{alignSelf: 'center', color: 'blue'}}>Privacy Policy <Text style={{color: 'gray'}}>and</Text> Terms & Conditions</Text>
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
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