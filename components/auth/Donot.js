import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Donot({high, text}) {
  return (
    <View style={styles.container}>
      <Text>{high} <Text style={{color: 'blue'}}> {text}</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center'
    }
})