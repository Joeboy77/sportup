import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsive } from '../../shared/getResponsiveness'
import { COLORS } from '../../hooks/Colors'

const Button = ({backgroundColor, text, borderColor, borderWidth}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor}, {borderColor}, {borderWidth}]}> 
      <Text style={{color: COLORS.PRIMARY_TEXT, fontWeight: 'bold'}}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: responsive.number(153),
        height: responsive.number(56),
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default Button