import { View, Text, StyleSheet, TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import React, {useState} from 'react'
import { responsive } from '../../shared/getResponsiveness'
import ForgotPassword from '../../components/auth/ForgotPassword'
import Button from '../../components/auth/Button'
import OrSign from '../../components/auth/OrSign';
import AppleGoogle from '../../components/auth/AppleGoogle';
import appleLogo from '../../assets/img/apple.png'
import googleLogo from '../../assets/img/google.png'
import Donot from '../../components/auth/Donot';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const handleSignIn = () => {
      navigation.navigate('HomeMain')
    }
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

      <ForgotPassword />

      <Button text="Sign In" onPress={handleSignIn}/>

      <OrSign />

      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
        marginLeft: responsive.number(20), marginRight: responsive.number(20)
      }}>
      <AppleGoogle logo={appleLogo} text="Apple"/>
      <AppleGoogle logo={googleLogo} text="Google"/>
      </View>
      
      <View style={{marginTop: '50%'}}>
      <Donot high="Don't have an accout?" text="Sign Up"/>
      </View>
      

      <StatusBar style="auto" />
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