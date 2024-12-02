import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsive } from '../../../shared/getResponsiveness'
import { COLORS } from '../../../hooks/Colors'
import gymIcon from '../../../assets/img/gymIcon.png'
import dot from '../../../assets/img/eclipse.png'
import StartButton from './StartButton'

export default function TrendingPlanCard({backgroundImage, head, weeks, times}) {
  return (
    <TouchableOpacity style={{borderRadius: 12, width: responsive.number(301), height: responsive.number(174), overflow: 'hidden'}}>
      <ImageBackground source={backgroundImage} style={styles.container}>
        <Text style={styles.head}>{head}</Text>

        <View style={{display: 'flex',
          flexDirection: 'row', alignItems: 'center', gap: responsive.number(8), marginLeft: responsive.number(15), marginTop: responsive.number(8)
        }}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: responsive.number(2)}}>
                <Image source={gymIcon}/>
                <Text style={{color: COLORS.PRIMARY_TEXT, fontSize: responsive.fontSize(12)}}>{weeks}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: responsive.number(5)
            }}>
              <Image source={dot}/>
              <Text style={{color: COLORS.PRIMARY_TEXT}}>{times}</Text>
            </View>
            
        </View>

        <StartButton start="Start"/>
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
        marginLeft: responsive.number(15)
    }
})