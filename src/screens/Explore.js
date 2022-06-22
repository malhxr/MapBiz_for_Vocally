import { View, Image, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Map from '../component/Map';
import Search from '../component/Search';
import {useDispatch,useSelector} from 'react-redux';
import {setdarkMode} from '../redux/actions'

const Explore = () => {
  
  const {darkMode} = useSelector(state => state.userReducer)
  const dispatch = useDispatch()

  const [darkModeTheme, setdarkModeTheme] = useState(false);
  const toggleSwitch = () => setdarkModeTheme(previousState => !previousState);

  const toggleClicked = () => {
    toggleSwitch(),
    dispatch(setdarkMode(darkModeTheme))
  }

  return (
    <View style={{ flex: 1, flexDirection: 'column' }} >
       
      <Map />
      <Search />

      <View style={styles.image}>
        <Pressable
          onPress={toggleClicked}
        >
          <Image
            source={darkMode === true ? require('../assets/toggle-dark.png') : require('../assets/toggle.png')}
            style={{
              width: 40,
              height: 40,
              marginTop: 30,
              marginBottom: 10,
            }}
          />
        </Pressable>
        <Image
          source={darkMode === true ? require('../assets/gps-dark.png') : require('../assets/gps.png')}
          style={{
            width: 40,
            height: 40,
            transform: [{ rotate: '45deg' }],
          }}
        />
      </View>
    </View>
  )
}

export default Explore

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
  image: {
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    alignItems: 'flex-end',
    marginRight: 20,
  }
})