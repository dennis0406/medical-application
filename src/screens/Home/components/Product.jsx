import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Product = props => {
  const saleStyle = typeof props.sale == 'number' ? styles.product__sale__number: styles.product__sale;
  return (
    <View style={ props.bottom ? styles.productBot: styles.product}>
      <Image source={props.img} style={styles.product__img} />
      <View style={props.bottom ? styles.product__contentBottom : styles.product__content}>
        <Text
          style={(styles.product__name, styles.black)}
          numberOfLines={2}
          ellipsizeMode="tail">
          {props.name}
        </Text>
        <Text style={props.price ? styles.product__price : styles.none}>
          {props.price || ''}
        </Text>
        <Text style={props.starNumber ? styles.star : styles.none}>
        <Icon name='star' size={18} color='white' /> { + props.starNumber || ''}
        </Text>
      </View>
      <Text style={props.sale ? saleStyle : styles.none}>
        {typeof props.sale == 'number' ? props.sale + '% off' : 'sale'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // Product
  product__price: {
    color: '#090F47',
    fontWeight: '600',
    // backgroundColor: 'green'
  },
  none: {
    display: 'none',
  },
  product: {
    backgroundColor: '#F5F7FA',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 16,
    height: 162,
    width: 110,
  },
  product__img: {
    width: '100%',
    resizeMode: 'cover',
  },
  product__content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  black: {
    color: 'black'
  },

  productBot: {
    marginBottom: 17,
    width: 157,
    height: 250,
    backgroundColor: '#F5F7FA',
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    position: 'relative',
  },
  product__contentBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    position: 'relative',
  },
  product__sale: {
    backgroundColor: '#FF5A5A',
    textTransform: 'uppercase',
    position: 'absolute',
    top: -20,
    left: -40,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    transform:  [{ rotate: "-45deg" }],
    padding: 40,
    paddingBottom: 10,
    fontWeight: '700',
    color: '#fff'
  },
  product__sale__number: {
    backgroundColor: '#FFC618',
    textTransform: 'uppercase',
    position: 'absolute',
    top: -20,
    left: -50,
    textAlign: 'center',
    textAlignVertical: 'center',
    transform:  [{ rotate: "-45deg" }],
    padding: 40,
    paddingBottom: 10,
    fontWeight: '700',
    color: '#fff',
  },
  star: {
    backgroundColor: '#FFC000',
    color: '#FFFFFF',
    position: 'absolute',
    right: 0,
    bottom: 15,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    padding: 5
  },
})
export default Product;
