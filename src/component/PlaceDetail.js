import { View, Text, StyleSheet, Image, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { markers } from '../model/MapModel';
import { useDispatch, useSelector } from 'react-redux';


const PlaceDetail = (props) => {

  const dispatch = useDispatch()
  const { darkMode } = useSelector(state => state.userReducer)

  const id = props.id ? props.id : 0

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={[styles.PlaceDetail, {
      backgroundColor: darkMode === true ? '#333333' : '#ffffff',
      top: isKeyboardVisible ? 200 : 0,
    }]}>

      <Image
        source={markers[id].placeImages}
        style={{ width: 80, height: 80, margin: 10, borderRadius: 10 }}
      />

      <View style={{ flexDirection: 'column' }}>

        <Text numberOfLines={1} style={{
          padding: 0, marginLeft: 5, fontSize: 18, marginBottom: 2,
          color: darkMode === true ? '#ededed' : '#090909', fontWeight: "bold"
        }}>{markers[id].title}</Text>

        <Text numberOfLines={1} style={{
          padding: 0, marginLeft: 5, fontSize: 13,
          color: darkMode === true ? '#5a5a5a' : "#c3c3c3"
        }}>{markers[id].description}</Text>

      </View>
    </View>
  )
}

export default PlaceDetail

const styles = StyleSheet.create({
  PlaceDetail: {
    marginVertical: 100,
    width: '90%',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#5d5d5d',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    flexDirection: 'row'
  }
})