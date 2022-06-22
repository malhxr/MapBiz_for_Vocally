import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState } from 'react';
import { Image, Keyboard, View } from 'react-native';
import Explore from '../screens/Explore';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import NewBiz from '../screens/NewBiz';
import Maps from '../screens/Maps';

const Tab = createBottomTabNavigator();

const Tabs = () => {

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
    <Tab.Navigator
      initialRouteName='Explore'
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: darkMode === true ? '#000000' : '#ffffff',
          height: 70,
        }
      }}
    >

      <Tab.Screen name="Explore" component={Explore}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 10 }} >
              <Image
                source={require('../assets/explore.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: darkMode === true ? '#fff' : '#000'
                }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen name="Maps" component={Maps}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 10 }} >
              <Image
                source={require('../assets/maps.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: darkMode === true ? '#fff' : '#000'
                }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen name="NewBiz" component={NewBiz}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require('../assets/addBiz.png')}
                resizeMode="contain"
                style={{
                  width: 70,
                  height: 70,
                  top: isKeyboardVisible ? 0 : -20,
                  tintColor: '#fe3139'
                }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen name="Notifications" component={Notifications}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 10 }} >
              <Image
                source={require('../assets/notification.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: darkMode === true ? '#fff' : '#000'
                }}
              />
            </View>
          )
        }}
      />

      <Tab.Screen name="Profile" component={Profile}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: () => (
            <View style={{ alignItems: 'center', justifyContent: 'center', bottom: 10 }} >
              <Image
                source={require('../assets/profile.png')}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: darkMode === true ? '#fff' : '#000'
                }}
              />
            </View>
          )
        }}
      />

    </Tab.Navigator>
  )
}

export default Tabs;