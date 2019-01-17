import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './components/Login'

const RootStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const App = createAppContainer(RootStack);

export default App;