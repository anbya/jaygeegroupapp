import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator  } from 'react-navigation';
import signInScreen from './signInScreen';
import signUpScreen from './signUpScreen';
import Codesquare from '../assets/images/codeSquare.png'
//--------------------------------------------------------------------------------//
const HomeStack = createStackNavigator(
  {
    SignIn: {
      screen: signInScreen,
      navigationOptions: {
        title: 'Signin',
   
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
    SignUp: signUpScreen
  }
);
//--------------------------------------------------------------------------------//

export default HomeStack;