import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsive } from '../../../shared/getResponsiveness'
import { COLORS } from '../../../hooks/Colors'

export default function StartButton({start}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{fontSize: responsive.fontSize(14), fontWeight: 'bold'}}>{start}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: responsive.number(100),
        height: responsive.number(32),
        backgroundColor: COLORS.PRIMARY_TEXT,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsive.number(15),
        marginTop: responsive.number(30),
        overflow: 'hidden',
        borderRadius: responsive.number(12)
    }
})