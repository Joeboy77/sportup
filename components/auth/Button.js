import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsive } from '../../shared/getResponsiveness'
import { COLORS } from '../../hooks/Colors'

export default function Button({text}) {
  return (
    <View style={styles.container}>
      <Text style={{color: COLORS.PRIMARY_TEXT, fontWeight: 'bold'}}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: responsive.number(327),
        height: responsive.number(56),
        alignSelf: 'center',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsive.number(6),
        marginTop: responsive.number(20)
    }
})