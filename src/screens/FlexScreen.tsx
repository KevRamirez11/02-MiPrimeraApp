import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const FlexScreen = () => {
  return (
    <View style= { styles.container }>
        <Text style={ styles.caja1 } > Caja1 </Text>
        <Text style={ styles.caja2 } > Caja2 </Text>
        <Text style={ styles.caja3 } > Caja3 </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28C4D9',
        // flexDirection: 'row'
        // justifyContent: 'space-around'
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        // flexDirection: 'row',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end'
    }, 
     caja1: {
        // flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-end'
     }, 
     caja2: {
        // flex: 2,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
     }, 
     caja3: {
        // flex: 3,
        borderWidth: 2,
        borderColor: 'white',
        fontSize: 30,
        alignSelf: 'flex-start'
     }
})