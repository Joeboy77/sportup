import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, {act, useState} from 'react'
import image1 from '../../assets/img/girl.png'
import Logo from '../../assets/img/Logo.png'
import { responsive } from '../../shared/getResponsiveness'
import { COLORS } from '../../hooks/Colors'
import GestureRecognizer from 'react-native-swipe-gestures'
import DotIndicator from '../../components/onboard/DotIndicator'


const Home = () => {

    const [activeIndex, setActiveIndex] = useState(0)
    const totalDots = 2

    const handleSwipeLeft = () => {
        if(activeIndex < totalDots - 1) setActiveIndex(activeIndex + 1)
    }

    const handleSwipeRight = () => {
        if(activeIndex > 0) setActiveIndex(activeIndex - 1)
    }
  return (
    <GestureRecognizer
    onSwipeLeft={handleSwipeLeft}
    onSwipeRight={handleSwipeRight}
    style= {styles.container}
    >
        <ImageBackground style={styles.container} source={image1}>
        <Image source={Logo} style={styles.logo}/>

        <Text style={styles.primaryText}>Fitness program that</Text>
        <Text style={styles.primaryText1}>get the result</Text>

        <View style={styles.subContainer}>
            <Text style={styles.subText}>Tailored exercise routines designed just for </Text>
            <Text style={styles.subText}>you based on your fitness level and goals.</Text>
        </View>

        <View style={styles.dotIndicator}>
            <DotIndicator activeIndex={activeIndex} totalDots={totalDots}/>
        </View>
        </ImageBackground>
    </GestureRecognizer>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        marginTop: responsive.number(95),
        alignSelf: 'center'
    },
    primaryText: {
        color: COLORS.PRIMARY_TEXT,
        fontWeight: '600',
        fontSize: responsive.fontSize(24),
        marginTop: responsive.number(400),
        marginLeft: responsive.number(20)
    },
    primaryText1: {
        color: COLORS.PRIMARY_TEXT,
        fontWeight: '600',
        fontSize: responsive.fontSize(24),
        marginLeft: responsive.number(20)
    },
    subContainer: {
        marginLeft: responsive.number(20),
        marginTop: responsive.number(10)
    },
    subText: {
        color: COLORS.SUB_PRIMARY,
        
    },
    
})

export default Home