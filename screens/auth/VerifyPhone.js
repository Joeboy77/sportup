import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import React from 'react'
import { responsive } from '../../shared/getResponsiveness'
import Verifier from '../../components/auth/Verifier';
import mail from '../../assets/img/mail.png'
import phone from '../../assets/img/phone.png'
import Button from '../../components/auth/Button';

export default function VerifyPhone() {
  return (
    <View>
        <Text style={styles.sign}>Verify your identity</Text>
        <Text style={styles.let}>Choose a method to verify your identity</Text>

        <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: responsive.number(20), marginTop: responsive.number(40)}}>
        <Verifier image={mail} title="Email" subTitle="email" borderColor="#E2E8F0" backgroundColor="#fff"/>
        <Verifier image={phone} title="Phone" subTitle="phone number"  backgroundColor="#000" color="#fff"/>
        </View>
        
        <View style={{marginTop: '85%'}}>
        <Button text="Continue"/>
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