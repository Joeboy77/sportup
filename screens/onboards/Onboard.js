import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'
import NextOn from '../../assets/img/nextOn.png'
import Logo from '../../assets/img/Logo.png'
import { responsive } from '../../shared/getResponsiveness'
import { COLORS } from '../../hooks/Colors'
import GestureRecognizer from 'react-native-swipe-gestures'
import DotIndicator from '../../components/onboard/DotIndicator'
import { useNavigation } from '@react-navigation/native'

const Onboard = () => {

    const navigation =  useNavigation()
    const [activeIndex, setActiveIndex] = useState(1)
    const totalDots = 2

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    }

    const handleSwipeRight = () => {
        if (activeIndex > 0) {
          setActiveIndex(activeIndex - 1);
          navigation.navigate('Home'); 
        }
      };

  return (
    <GestureRecognizer style={styles.container} config={config} onSwipeRight={handleSwipeRight}>
    <ImageBackground style={styles.container} source={NextOn}>
        <Image source={Logo} style={styles.logo}/>

        <Text style={styles.primaryText}>Find the coach just is</Text>
        <Text style={styles.primaryText1}>right for you</Text>

        <View style={styles.subContainer}>
            <Text style={styles.subText}>Tailored exercise routines designed just for </Text>
            <Text style={styles.subText}>you based on your fitness level and goals.</Text>
        </View>

        <View>
            <DotIndicator activeIndex={activeIndex} totalDots={totalDots} />
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
export default Onboard