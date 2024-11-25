import { View, StyleSheet } from 'react-native'
import React from 'react'
import { responsive } from '../../shared/getResponsiveness'

const DotIndicator = ({activeIndex, totalDots}) => {
  return (
    <View style={styles.container}>
      {
        Array.from({ length: totalDots}).map((_, index) => (
            <View
                key={index}
                style={[
                    styles.dot,
                    activeIndex === index ? styles.activeDot : styles.inactiveDot
                ]}
            />
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginLeft: responsive.number(20),
        marginTop: responsive.number(20),
      },
      dot: {
        width: responsive.number(10),
        height: responsive.number(5),
        borderRadius: 5,
        marginHorizontal: 5,
      },
      activeDot: {
        backgroundColor: "#5B67F4",
        width: responsive.number(30), 
      },
      inactiveDot: {
        backgroundColor: "#C4C4C4",
      },
})

export default DotIndicator