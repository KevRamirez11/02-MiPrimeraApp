
import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {

    const {width, height} = useWindowDimensions();

  return (
    <View>
        <View style={ styles.container }>
            <View style ={ styles.cajaRoasada }/>
            <View style ={ styles.cajaNaranja}/>
        </View>
        <Text style= { styles.title }> W: {width}, H: {height} </Text>
    </View>
    
  )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'black'
    },
    cajaRoasada: {
        backgroundColor: '#FF78DA',
        width: '50%',
        height: '50%'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }

})
