import { Image, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { responsive } from '../../shared/getResponsiveness'

export default function AppleGoogle({logo, text}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={logo}/>
      <Text style={{color: "#0F172A",fontWeight: '600' }}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: responsive.number(153),
        height: responsive.number(56),
        borderWidth: 1,
        borderRaduis: responsive.number(12),
        borderColor: '#E2E8F0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: responsive.number(10),
        marginTop: responsive.number(35)
    }
})