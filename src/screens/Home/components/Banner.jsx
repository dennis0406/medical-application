import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
const Banner = (props) => {
  return (
    <View style={styles.banner}>
      <Image source={props.img} style={styles.banner__img} />
      <View style={styles.banner__content}>
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.banner__content__title}>{props.title}</Text>
        <Text numberOfLines={3} ellipsizeMode='tail' style={styles.banner__content__desc}>{props.desc}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  banner: {
    height: 140,
    overflow: 'hidden',
    borderRadius: 10,
    position: 'relative',
    marginTop: 18,
    width: '100%',
  },
  banner__img: {
    width: '100%',
  },
  banner__content: {
    position: 'absolute',
    top: 28,
    left: 24,
    maxWidth: 124,
    color: 'red',
  },
  banner__content__title: {
    color: '#1987FB',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21
  },
  banner__content__desc: {
    color: 'black',
    fontWeight: '300',
  },
})
export default Banner