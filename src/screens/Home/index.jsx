import {View, Text, Image, ScrollView, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import Banner from './components/Banner';
import Title from './components/Title';
import Product from './components/Product';
import { dataBot, dataTop } from '../../utils/data';


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Banner
          img={require('../../assets/images/banners/banner.png')}
          title="Lorem ipsum dolor sit amet consectetur."
          desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, dicta."
        />
        <Title title="Diabetic Diet" />

        <ScrollView horizontal={true} style={styles.slider} showsHorizontalScrollIndicator={false}>
          {dataTop.map((data, index) => {
            return <Product key={index} img={data.img} name={data.name} />;
          })}
        </ScrollView>
      
        <Title title="All products" />
        <View style={styles.product__list} >
          {dataBot.map((data, index) => {
            return (
              <Product
                key= {index}
                bottom={true}
                img={data.img}
                starNumber={data.rate}
                price={'$' + data.price}
                name={data.name}
                sale={data.sale}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  slider: {
  },
  product__list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
})

export default Home;

