import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FormScreen from '../screens/FormScreen';
import ListScreen from '../screens/ListScreen';
import App from '../screens/SwitcherScreen';
import ToDoApp from '../screens/TodoApp';

type RootStackParamList = {
  Home: undefined;
  Form: undefined;
  List: undefined;
  Switcher: undefined;
  Todo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Form" component={FormScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Switcher" component={App} />
      <Stack.Screen name="Todo" component={ToDoApp} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
