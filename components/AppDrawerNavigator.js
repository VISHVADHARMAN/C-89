import React from 'react';
import {Icon} from 'react-native-elements';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon:<Icon name="home" type="fontawesome5"/>
    }
    },
  MyDonations : {
    screen : MyDonationScreen,
    navigationOptions:{
      drawerIcon:<Icon name="gift" type="fontawesome5"/>,
      drawerLabel:"My Donations"
    }
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon:<Icon name="bell" type="fontawesome5"/>,
      drawerLabel:"Notifications"
    }
  },
  MyReceivedBooks :{
    screen: MyReceivedBooksScreen,
    navigationOptions:{
      drawerIcon:<Icon name="gift" type="fontawesome5"/>,
      drawerLabel:"My Received Books"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon:<Icon name="setting" type="fontawesome5"/>,
      drawerLabel:"Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
