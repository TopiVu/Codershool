import React, { Component } from '../../core/node_modules/react'
import { View, Text, StyleSheet } from '../../core/node_modules/react-native'

export default class More extends Component {
  static navigationOptions = {
    header: () => {
      return <View />
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <Text>More Screen</Text>
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