import React from 'react'
import { View, Image, Text } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from '../page/Home/home.page'

import ProductPage from '../page/Product/product.page'
import ProductDetailPage from '../page/Product/component/product.detail'

import EventPage from '../page/Event/event.page'

import NoticePage from '../page/Notice/notice.page'

import MorePage from '../page/More/more.page'
import ProductDetail from '../page/Product/component/product.detail';


const HomeStack = createStackNavigator(
  {
    Home: { screen: HomePage }
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Home'
  }
);

HomeStack.navigationOptions = ({ navigation }: any) => {
  if (navigation.state.routes[navigation.state.index].routeName === 'Home') {
    return { tabBarVisible: true }
  }
  return { tabBarVisible: false }
}
const ProductStack = createStackNavigator(
  {
    Product: {screen: ProductPage } ,
    ProductDetail: {screen: ProductDetailPage }
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Product'
  }
);

ProductStack.navigationOptions = ({ navigation }: any) => {
  if (navigation.state.routes[navigation.state.index].routeName === 'Product') {
    return { tabBarVisible: true }
  }
  return { tabBarVisible: false }
}
const NoticeStack = createStackNavigator(
  {
    Notice: {screen: NoticePage}
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Notice'
  }
);

NoticeStack.navigationOptions = ({ navigation }: any) => {
  if (navigation.state.routes[navigation.state.index].routeName === 'Notice') {
    return { tabBarVisible: true }
  }
  return { tabBarVisible: false }
}
const EventStack = createStackNavigator(
  {
    Event: {screen: EventPage }
  },
  {
    headerMode: 'screen',
    initialRouteName: 'Event'
  }
);

EventStack.navigationOptions = ({ navigation }: any) => {
  if (navigation.state.routes[navigation.state.index].routeName === 'Event') {
    return { tabBarVisible: true }
  }
  return { tabBarVisible: false }
}
const MoreStack = createStackNavigator(
  {
    More: MorePage
  },
  {
    headerMode: 'screen',
    initialRouteName: 'More'
  }
);

MoreStack.navigationOptions = ({ navigation }: any) => {
  if (navigation.state.routes[navigation.state.index].routeName === 'More') {
    return { tabBarVisible: true }
  }
  return { tabBarVisible: false }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Product: ProductStack,
  Event: EventStack,
  Notice: NoticeStack,
  More: MoreStack
},
  {
    defaultNavigationOptions: ({ navigation }: any) => ({
      header: () => {<View />},
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        const itemBar = (icon: any, iconActive: any, name: string, color: string, focused: any) => {
          return (
            <View style={{ alignItems: 'center' }}>
              <Image source={focused ? iconActive : icon} style={{ width: 24, height: 24 }} />
              <Text style={{ color: focused ? color : '#888888', fontSize: 13 }}>{name}</Text>
            </View>
          )
        }

        switch (routeName) {
          case 'Home':
            return itemBar(require('./../assets/tab-home.png'), require('./../assets/tab-home-active.png'), routeName, '#F39200', focused)
          case 'Product':
            return itemBar(require('./../assets/tab-store.png'), require('./../assets/tab-store-active.png'), routeName, '#008BD2', focused)
          case 'Event':
            return itemBar(require('./../assets/tab-order.png'), require('./../assets/tab-order-active.png'), routeName, '#E5007D', focused)
          case 'Notice':
            return itemBar(require('./../assets/tab-gift.png'), require('./../assets/tab-gift-active.png'), routeName, '#3AAA35', focused)
          case 'More':
            return itemBar(require('./../assets/tab-more.png'), require('./../assets/tab-more-active.png'), routeName, '#1F2D3D', focused)
          default:
            return itemBar(require('./../assets/tab-home.png'), require('./../assets/tab-home.png'), routeName, '#1F2D3D', focused)
        }
      },
      tabBarOptions: {
        showLabel: false,
      }
    })
  }
)

export default createAppContainer(TabNavigator)