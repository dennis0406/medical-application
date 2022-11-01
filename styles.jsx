import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
  },
  banner: {
    height: 140,
    overflow: 'hidden',
    borderRadius: 10,
    position: 'relative',
    marginTop: 18,
    width: '100%',
  },
  slider: {
    minHeight: 162,
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
  // Title
  title: {
    marginVertical: 20,
    color: 'black',
    textTransform: 'capitalize',
    textAlign: 'left',
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

  product__list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  }
  
});
export default styles;