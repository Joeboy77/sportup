import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, {act, useState} from 'react'
import image1 from '../../assets/img/girl.png'
import Logo from '../../assets/img/Logo.png'
import { responsive } from '../../shared/getResponsiveness'
import { COLORS } from '../../hooks/Colors'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import DotIndicator from '../../components/onboard/DotIndicator'
import { useNavigation, useFocusEffect } from '@react-navigation/native';



const Home = () => {

    const navigation = useNavigation();
    const [activeIndex, setActiveIndex] = useState(0)
    
    const screens = ['Home', 'Onboard'];

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    }

    const handleSwipeLeft = () => {
        if (activeIndex < screens.length - 1) {
          const nextIndex = activeIndex + 1;
          setActiveIndex(nextIndex);
          navigation.navigate(screens[nextIndex]);
        }
      };
    
      const handleSwipeRight = () => {
        if (activeIndex > 0) {
          const prevIndex = activeIndex - 1;
          setActiveIndex(prevIndex);
          navigation.navigate(screens[prevIndex]);
        }
      };

      useFocusEffect(
        React.useCallback(() => {
            setActiveIndex(0)
        }, [])
      )
  return (
    <GestureRecognizer
    onSwipeLeft={handleSwipeLeft}
    onSwipeRight={handleSwipeRight}
    config={config}
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
            <DotIndicator activeIndex={activeIndex} totalDots={screens.length}/>
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