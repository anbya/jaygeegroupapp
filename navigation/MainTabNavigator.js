import React from 'react';
import { Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { createBottomTabNavigator, createAppContainer,createStackNavigator  } from 'react-navigation';
import HomeScreen from '../pages/HomeScreen';
import HometestScreen from '../pages/HometestScreen';
import AccountScreen from '../pages/AccountScreen';
import AccountDetail from '../pages/accountDetail';
import HomeDetail from '../pages/homeDetail';
import Codesquare from '../assets/images/codeSquare.png'

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
  } else if (routeName === 'Hometest') {
    iconName = `ios-home`;
  } else if (routeName === 'Account') {
    iconName = `ios-person`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};
//--------------------------------------------------------------------------------//
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HometestScreen, 
      navigationOptions: {
          header: null,
      },
    },
    // Home: {
    //   screen: HomeScreen,
    //   navigationOptions: {
    //     title: 'HOME',
   
    //     headerLeft : 
    //     <Image
    //     source={Codesquare}
    //     style={{ width: 45, height: 20, marginLeft: 15}}
    //     />,
   
    //     headerStyle: {
   
    //       backgroundColor: '#019cde'
    
    //     },
   
    //   headerTintColor: '#ffffff',
   
    //   },
    // },
    HomeDetail: HomeDetail
  },{
    headerMode: 'screen' 
  }
);
HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
const HomeStesttack = createStackNavigator(
  {
    Hometest: {
      screen: HometestScreen, 
      navigationOptions: {
          header: null,
      },
    },
    HomeDetail: HomeDetail
  },{
    headerMode: 'screen' 
  }
);
HomeStesttack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
//--------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------//
const AccountStack = createStackNavigator(
  {
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        title: 'TRANSDEAL',
   
        headerLeft : 
        <Image
        source={Codesquare}
        style={{ width: 45, height: 20, marginLeft: 15}}
        />,
   
        headerStyle: {
   
          backgroundColor: '#019cde'
    
        },
   
      headerTintColor: '#ffffff',
   
      },
    },
    AccountDetail: AccountDetail
  }
);
AccountStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};
//--------------------------------------------------------------------------------//
const TabBar = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Hometest: { screen: HomeStesttack },
    Account: { screen: AccountStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: '#019cde',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabBar);

