import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AllScreen() {
  return (
    <View style={styles.container}>
      <Text>Active Screen</Text>
    </View>
  );
}

AllScreen.navigationOptions = {
  title: 'Active Todos'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});