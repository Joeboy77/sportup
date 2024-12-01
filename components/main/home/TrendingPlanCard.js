import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsive } from '../../../shared/getResponsiveness'
import { COLORS } from '../../../hooks/Colors'
import gymIcon from '../../../assets/img/gymIcon.png'

export default function TrendingPlanCard({backgroundImage, head}) {
  return (
    <TouchableOpacity style={{borderRadius: 12, width: responsive.number(301), height: responsive.number(174), overflow: 'hidden'}}>
      <ImageBackground source={backgroundImage} style={styles.container}>
        <Text style={styles.head}>{head}</Text>

        <View>
            <View>
                <Image source={gymIcon}/>
            </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    head: {
        color: COLORS.PRIMARY_TEXT,
        fontSize: responsive.number(20),
        fontWeight: 'bold',
        width: responsive.number(155),
        marginTop: responsive.number(20),
        marginLeft: responsive.number(20)
    }
})