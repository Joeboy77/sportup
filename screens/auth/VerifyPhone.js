import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { responsive } from '../../shared/getResponsiveness'
import Verifier from '../../components/auth/Verifier';
import mail from '../../assets/img/mail.png'
import phone from '../../assets/img/phone.png'
import Button from '../../components/auth/Button';
import { useNavigation } from '@react-navigation/native';

export default function VerifyPhone() {
  const navigation = useNavigation()
  const [selectedMethod, setSelectedMethod] = useState(null)

  const handleContinue = () => {
    if(selectedMethod === 'email'){
      navigation.navigate('EmailVerification')
    } else if(selectedMethod === 'phone'){
      navigation.navigate('PhoneVerification')
    }
  }
  return (
    <View>
        <Text style={styles.sign}>Verify your identity</Text>
        <Text style={styles.let}>Choose a method to verify your identity</Text>

        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: responsive.number(20), marginTop: responsive.number(40)}}>

        <Verifier
          onPress={() => setSelectedMethod('email')}
          image={mail}
          title="Email" 
          subTitle="email" 
          borderColor={selectedMethod === 'email' ? '#007BFF' : '#E2E8F0'}
          backgroundColor={selectedMethod === 'email' ? '#EAF3FF' : '#fff'}
        />

        <Verifier
        onPress={() => setSelectedMethod('phone')}
          image={phone}
          title="Phone" 
          subTitle="phone number"  
          borderColor={selectedMethod === 'phone' ? '#007BFF' : '#E2E8F0'}
          backgroundColor={selectedMethod === 'phone' ? '#EAF3FF' : '#000'}
          color={selectedMethod === 'phone' ? '#000' : '#fff'}
          />
        </View>
        
        <View style={{marginTop: '85%'}}>
        <Button
         text="Continue"
         onPress={handleContinue}
          disabled={!selectedMethod}
          style={{
            backgroundColor: selectedMethod ? '#000' : '#CCC',
            color: selectedMethod ? '#fff' : '#666',
          }}
         />
        </View>
        
        <StatusBar style="auto" />
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
})