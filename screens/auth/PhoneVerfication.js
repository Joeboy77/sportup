import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import PhoneInput from 'react-native-phone-number-input'
import device from '../../assets/img/device.png'
import { responsive } from '../../shared/getResponsiveness'
import Button from '../../components/auth/Button'

export default function PhoneVerfication() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('US');

    const handleVerify = () => {
        navigation.navigate('CodeVerificationPage', { phoneNumber: formattedPhoneNumber });
      };

  return (
    <View>
      <Image source={device} style={styles.device}/>

      <Text style={styles.sign}>Phone Number</Text>
      <Text style={{color: 'gray', marginLeft: responsive.number(20), marginTop: responsive.number(10)}}>We're going to send you a verification code to </Text>
      <Text style={{color: 'gray', marginLeft: responsive.number(20)}}>confirm your identity</Text>

      <PhoneInput 
        defaultCode={countryCode}
        onChangeCountry={(code) => setCountryCode(code.cca2)}
        onChangeText={(text) => setPhoneNumber(text)}
        onChangeFormattedText={(text) => setFormattedPhoneNumber(text)}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        textInputStyle={{fontSize: responsive.fontSize(16)}}
      />

      <Text style={{color: "blue", marginLeft: responsive.number(20), marginTop: responsive.number(20)}}>Skip for now</Text>

      <View style={{marginTop: responsive.number(50)}}>
      <Button text="Verify" onPress={() => handleVerify}/>
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
    phoneContainer: {
        marginTop: responsive.number(40),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CBD5E1',
        backgroundColor: '#F9FAFB',
        alignSelf: 'center',
        width: responsive.number(327),
        height: responsive.number(56)
      },
      textInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
      },
})    