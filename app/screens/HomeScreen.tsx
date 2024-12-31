import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Form: undefined;
  List: undefined;
  Switcher: undefined;
  Todo: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Advanced App!</Text>
      <View style={styles.buttons}>
          <Button title="Go to Form" onPress={() => navigation.navigate('Form')} />
          <Button title="View List" onPress={() => navigation.navigate('List')} />
          <Button title="View Switcher" onPress={() => navigation.navigate('Switcher')} />
          <Button title="View Todo app" onPress={() => navigation.navigate('Todo')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttons: {
    display: "flex",
    flexDirection:'row',
    flexWrap:'wrap',
    gap:16,
  }
});

export default HomeScreen;
