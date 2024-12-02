import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import notificationIcon from '../../assets/img/notification.png'
import { responsive } from '../../shared/getResponsiveness'
import { COLORS } from '../../hooks/Colors'
import flame from '../../assets/img/flame.png'
import TrendingPlanCard from '../../components/main/home/TrendingPlanCard'
import trend1 from '../../assets/img/trend1.png'
import trend2 from '../../assets/img/trend2.jpg'
import trend3 from '../../assets/img/trend3.jpg'
import TrainerCard from '../../components/main/home/TrainerCard'
import trainer1 from '../../assets/img/trainer1.png'
import trainer2 from '../../assets/img/trainer2.png'

export default function HomeMain() {
    const name = "Joe"

    const trendingPlan = [
      {
        id: 1,
        backgroundImage: trend1,
        head: "Massive Upper Body",
        weeks: '5 weeks',
        times: '4x/week'
      },
      {
        id: 2,
        backgroundImage: trend2,
        head: "Intense Chest Build",
        weeks: "8 weeks",
        times: '6x/week',
      },
      {
        id: 3,
        backgroundImage: trend3,
        head: "Full Weight Lifting",
        weeks: "6 weeks",
        times: '3x/week'
      }
    ]

    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
            <Text style={styles.greetings}>Hello {name}</Text>
            <Text style={styles.stay}>Stay Fit & Healthy</Text>
        </View>
        <Image source={notificationIcon}/>
      </View>

      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, marginLeft: responsive.number(20), marginTop: responsive.number(30)}}>
        <Text style={{fontSize: responsive.number(16), fontWeight: 'bold'}}>Trending Plan</Text>
        <Image source={flame}/>
      </View>

      

      <FlatList 
        data={trendingPlan}
        renderItem={({item}) => (
          <TrendingPlanCard 
            backgroundImage={item.backgroundImage}
            head={item.head}
            weeks={item.weeks}
            times={item.times}
            
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendList}
        
      />

      <View style={styles.trainers}>
        <Text style={{fontSize: responsive.fontSize(18), fontWeight: 'bold'}}>Pro trainers</Text>
        <Text style={{fontSize: responsive.fontSize(14), color: 'blue', fontWeight: '600'}}>View All</Text>
      </View>

      <View style={{display: 'flex', flexDirection: 'row', marginLeft: responsive.number(20), marginRight: responsive.number(20), justifyContent: 'space-between', marginTop: responsive.number(20)}}>
      <TrainerCard background={trainer1} job="Fitness Expert" name="Marvin McKinney"/>
      <TrainerCard background={trainer2} job="Fitness Model" name="Ester Howard"/>
      </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PRIMARY_TEXT,
        
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
    },
    trendList: {
      paddingHorizontal: responsive.number(20),
      marginTop: responsive.number(15),
      gap: responsive.number(10)
    },
    trainers: {
      marginTop: responsive.number(30),
      marginLeft: responsive.number(20),
      marginRight: responsive.number(20),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
})