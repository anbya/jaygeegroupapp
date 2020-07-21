import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from './AuthScreen';
import SignInScreen from './LoginScreen';
// const AuthStack = createStackNavigator({ SignIn: SignInScreen });
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainTabNavigator,
      Auth: SignInScreen,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
