import React, { Component } from 'react'
import { View, Text, StyleSheet } from '../../core/node_modules/react-native'

export default class Notice extends Component {
  static navigationOptions = {
    header: () => {
      return <View />
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <Text>Notice Screen</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})