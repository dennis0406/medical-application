import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View, StyleSheet, Button} from 'react-native';
import {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
const MapViews = () => {
  const mapRef = useRef(null);
  console.log(mapRef?.current);

  const [markerPosition, setMarkerPosition] = useState({
    lat: 16.0589628,
    lng: 108.2412514,
  });

  const [mapType, setMapType] = useState("standard")
  const shopRegion = {
    latitude: 16.0589628,
    longitude: 108.2412514,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };
  const goToShop = () => {
    mapRef.current.animateToRegion(shopRegion, 3 * 1000);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        mapType={mapType}
        userInterfaceStyle="dark"
        showsUserLocation={true}
        showsIndoorLevelPicker={true}
        region={{
          latitude: 16.059828,
          longitude: 108.243605,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: markerPosition?.lat,
            longitude: markerPosition?.lng,
          }}
        />
      </MapView>

      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          styles={{textInput: styles.input}}
          placeholder="Search..."
          query={{
            key: 'AIzaSyAh0kuFq98yIUvqXinNbnEywzQ2gXhaJlc',
            language: 'en',
          }}
          fetchDetails={true}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          onPress={(data, details = null) => {
            console.log('data', data);
            console.log('details', details);
            const region = details?.geometry?.location;
            setMarkerPosition(region);
            mapRef?.current?.animateToRegion(
              {
                latitude: region?.lat,
                longitude: region?.lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              },
              500,
            );
          }}
          onFail={error => console.error(error)}
        />
      </View>
      <View style={styles.listIcons}>
        <Icon
          name="target"
          size={35}
          color="#4157FF"
          style={styles.iconMap}
          onPress={() => goToShop()}
        />
        <Icon
          name="layers"
          size={35}
          color="#4157FF"
          style={styles.iconMap}
          onPress={() => {mapType=="standard" ? setMapType('satellite') : setMapType('standard') }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '95%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    top: 3,
    position: 'absolute',
    width: '90%',
    backgroundColor: 'transparent',
    shadowColor: 'black',
    padding: 5,
    borderRadius: 10,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#8888',
    backgroundColor: 'transparent',
    fontWeight: '600'
  },
  iconMap: {
    backgroundColor: '#ffff',
    padding: 5,
    borderRadius: 10,
    marginBottom: 6
  },
  listIcons: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 40,
    right: 20,
  }
});

export default MapViews;
