import { View, TextInput, StyleSheet, Image, FlatList, Text, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { markers } from '../model/MapModel';

const Search = (props) => {

  const dispatch = useDispatch()
  const { darkMode } = useSelector(state => state.userReducer)

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
    <>

      <View style={[styles.searchBox, { backgroundColor: darkMode === true ? '#333333' : '#ffffff' }]}>
        <Image
          source={darkMode === true ? require('../assets/search-dark.png') : require('../assets/search-light.png')}
          style={{ width: 20, height: 20, marginHorizontal: 10, marginTop: 4 }}
        />
        {darkMode === true ?
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#555555"
            autoCapitalize="none"
            style={{ flex: 1, padding: 0, marginLeft: 5, color: '#ffffff' }}
          />
          :
          <TextInput
            placeholder="Search here"
            placeholderTextColor="#bbbbbb"
            autoCapitalize="none"
            style={{ flex: 1, padding: 0, marginLeft: 5, color: '#000000' }}
          />}


      </View>
      {
        isKeyboardVisible ?
          <FlatList 
            data={markers}
            style={[styles.PlaceDetail, { backgroundColor: darkMode === true ? '#333333' : '#ffffff' }]}
            bounces={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.PlaceView}>
                  <Image style={styles.imageStyle} source={darkMode === true ? item.imageDark : item.image} resizeMode="contain" />
                  <Text style={styles.titleStyle}>{item.title}</Text>
                </View>
              );
            }}
          />
          :
          null
      }
    </>
  )
}

export default Search

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 40,
    flexDirection: "row",
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 7,
    shadowColor: '#5d5d5d',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  PlaceDetail: {
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    backgroundColor: '#fff',
    elevation: 10,
    flexDirection: 'row'
  },
  titleStyle: {
    fontSize: 16,
    marginLeft: 20,
    color: '#000000'
  },
  PlaceView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  imageStyle: {
    alignItems: 'center',
    width: 40,
    height: 40,
    marginLeft: 20,
  }
})