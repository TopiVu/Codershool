import React from '../../core/node_modules/react'
import { View, Text, StyleSheet, TouchableOpacity } from '../../core/node_modules/react-native'

export default class Product extends React.Component {
  props: any
  constructor(props) {
    super(props)
  }
  static navigationOptions = {
    header: () => {
      return <View />
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <Text>Product Screen</Text>
        <TouchableOpacity onPress = {()=>this.props.navigation.navigate('ProductDetail')} >
          <Text>Product detail</Text>
        </TouchableOpacity>
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