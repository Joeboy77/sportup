import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsive } from '../../../shared/getResponsiveness'
import { BlurView } from 'expo-blur'
import { COLORS } from '../../../hooks/Colors'
import Feather from '@expo/vector-icons/Feather';

export default function TrainerCard({background, name, job}) {
  return (
    <Pressable style={styles.container}>
      <ImageBackground source={background} style={styles.card}>

        <View style={styles.bookmark}>
        <Feather name="bookmark" size={24} color="white" />
        </View>

      

        <BlurView intensity={20} style={styles.overlay}>
            <Text style={{fontSize: responsive.fontSize(12), color: '#e2e8f0', marginTop: responsive.number(5)}}>{job}</Text>
            <Text style={{fontSize: responsive.fontSize(14), color: COLORS.PRIMARY_TEXT, fontWeight: '600', marginTop: responsive.number(8)}}>{name}</Text>
        </BlurView>
      </ImageBackground>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: responsive.number(154),
        height: responsive.number(225),
        overflow: 'hidden',
        borderRadius: responsive.number(8)
    },
    card: {
        width: '100%',
        height: '100%',
        borderRadius: responsive.number(8)
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        height: responsive.number(75)
    },
    bookmark: {
        width: responsive.number(32),
        height: responsive.number(32),
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: responsive.number(8),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsive.number(10),
        alignSelf: 'flex-end',
        marginRight: responsive.number(10)
    }
})