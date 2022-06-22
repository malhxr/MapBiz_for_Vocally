import { View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps';
import { mapStandardStyle, MapDarkTheme, markers } from '../model/MapModel';
import PlaceDetail from './PlaceDetail';
import { useDispatch, useSelector } from 'react-redux';


const Map = (props) => {

  const dispatch = useDispatch()
  const { darkMode } = useSelector(state => state.userReducer)

  const [state, setState] = useState(markers);
  const [id, setid] = useState();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        customMapStyle={darkMode === true ? MapDarkTheme : mapStandardStyle}
      >
        {markers.map((marker, index) => {
          return (
            <MapView.Marker key={index} coordinate={marker.coordinate} onPress={() => setid(index)}>
              {id == undefined ? setid(0) : null}
              <View style={[styles.markerWrap, { transform: [id === index ? { scale: 1.2 } : { scale: 0.80 }] }]}>
                <Image
                  source={darkMode === true ? marker.imageDark : marker.image}
                  style={[styles.marker,
                  { borderColor: id === index && darkMode === true ? '#ffffff' : id === index && darkMode === false ? '#161616' : null }]}
                  resizeMode="cover"
                />
              </View>
            </MapView.Marker>
          );
        })}
      </MapView>
      <PlaceDetail id={id} />
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
  marker: {
    width: 40,
    height: 40,
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 100
  }
})