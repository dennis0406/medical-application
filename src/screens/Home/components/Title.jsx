import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = (props) => {
  return (
      <Text style={styles.title} >{props.title}</Text>
  )
}

const styles = StyleSheet.create({
  // Title
  title: {
    marginVertical: 20,
    color: 'black',
    textTransform: 'capitalize',
    textAlign: 'left',
  },
})
export default Title;