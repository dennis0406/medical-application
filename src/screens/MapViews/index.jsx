import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {View, StyleSheet} from 'react-native';
import {useRef, useState} from 'react';
const MapViews = () => {
  const mapRef = useRef(null);
  console.log(mapRef?.current);

  const [markerPosition, setMarkerPosition] = useState({
    lat: 37.78825,
    lng: -122.4324,
  });

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
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
          placeholder="Search"
          query={{
            key: 'AIzaSyAh0kuFq98yIUvqXinNbnEywzQ2gXhaJlc',
            language: 'en',
          }}
          fetchDetails={true}
          GooglePlacesDetailsQuery={{fields: 'geometry'}}
          onPress={(data, details = null) => {
            console.log('data', data);
            console.log('details', details);
            console.log(JSON.stringify(details?.geometry?.location));
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
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '90%',
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
    backgroundColor: '#ffffff',
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
  },
});

export default MapViews;
