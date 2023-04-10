

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
  return (
    <View style= { styles.container }>
        <Text style={ styles.title }>Box Object Model</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 30,
    marginHorizontal: 15,
    marginTop: 15,
    fontSize: 20,
    // width: 150,
    borderWidth: 10
    // backgroundColor: 'red'
  }
}) 