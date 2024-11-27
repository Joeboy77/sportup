import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsive } from '../../shared/getResponsiveness'

export default function Verifier({image, title, subTitle, backgroundColor, borderColor, color, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, {borderColor, backgroundColor}]} onPress={onPress}>
      <Image source={image}/>

      <View style={{gap: 5}}>
        <Text style={{fontSize: responsive.fontSize(14), fontWeight: 'bold', color: color}}>{title}</Text>
        <Text style={{color: 'gray'}}>Verify with your <Text>{subTitle}</Text></Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: responsive.number(327),
        height: responsive.number(72),
        borderRadius: responsive.number(12),
        borderWidth: 1,
        borderColor: '#000',
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: responsive.number(20),
        gap: responsive.number(20)
    }
})