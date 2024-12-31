import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome! Navigate using the menu or buttons.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
  },
});

export default Index;
