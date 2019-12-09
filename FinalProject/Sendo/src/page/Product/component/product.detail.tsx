import React, { Component } from '../../../core/node_modules/react'
import { View, Text, StyleSheet } from '../../../core/node_modules/react-native'

export default class ProductDetail extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>This is product detail</Text>
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