import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsive } from '../../shared/getResponsiveness'

export default function OrSign() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={{color: '#94A3B8'}}>Or sign in with</Text>
      <View style={styles.line}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: responsive.number(35),
        alignItems: 'center',
        justifyContent: 'space-around',
        marginLeft: responsive.number(20),
        marginRight: responsive.number(20)
    },
    line: {
        width: responsive.number(116),
        height: responsive.number(2),
        backgroundColor: '#E2E8F0'
    }
})