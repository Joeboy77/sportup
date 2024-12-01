import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import notificationIcon from '../../assets/img/notification.png'
import { responsive } from '../../shared/getResponsiveness'
import { COLORS } from '../../hooks/Colors'
import flame from '../../assets/img/flame.png'

export default function HomeMain() {
    const name = "Joe"

    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
            <Text style={styles.greetings}>Hello {name}</Text>
            <Text style={styles.stay}>Stay Fit & Healthy</Text>
        </View>
        <Image source={notificationIcon}/>
      </View>

      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginLeft: responsive.number(20), marginTop: responsive.number(40)}}>
        <Text style={{fontSize: responsive.number(16), fontWeight: 'bold'}}>Trending Plan</Text>
        <Image source={flame}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PRIMARY_TEXT,
        flex: 1
    },
    header: {
        marginTop: responsive.number(70),
        marginLeft: responsive.number(20),
        marginRight: responsive.number(20),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    greetings: {
        fontSize: responsive.fontSize(12),
        color: 'gray'
    },
    stay: {
        fontSize: responsive.fontSize(14),
        fontWeight: '700',
        marginTop: responsive.number(5)
    }
})