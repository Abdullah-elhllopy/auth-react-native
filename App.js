import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Login from './src/screens/login';
import Mobile from './src/screens/mobile';
import Otp from './src/screens/otp';
import Register from './src/screens/register';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home" component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login" component={Login}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register" component={Register}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Mobile" component={Mobile}
        />
         <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Otp" component={Otp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


