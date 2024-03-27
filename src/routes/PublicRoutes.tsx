import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackScreenParam from '../interfaces/iStackScreenParam';
import SignUp from '../screens/authScreens/SignUp';
import Register from '../screens/authScreens/Register';
import Login from '../screens/authScreens/Login';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator<StackScreenParam>();

const PublicRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signup"
      screenOptions={{headerTitle: 'Salon'}}>
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default PublicRoutes;
