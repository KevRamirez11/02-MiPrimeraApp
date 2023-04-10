import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TareaScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada } />
        <View style={ styles.cajaNaranja } />
        <View style={ styles.cajaAzul } />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cajaMorada: {
        width: 100,
        // height: 100,
        borderWidth: 10,
        backgroundColor: '#5856D6',
        borderColor: 'white',
        // alignSelf: 'flex-end' 

    },
    cajaNaranja: {
        width: 100,
        // height: 100,
        borderWidth: 10,
        backgroundColor: '#F0A23B',
        borderColor: 'white',
        // alignSelf: 'center'
    },
    cajaAzul: {
        width: 100,
        // height: 100,
        borderWidth: 10,
        backgroundColor: '#28C4D9',
        borderColor: 'white',
        // alignSelf: 'center'

    },
})
