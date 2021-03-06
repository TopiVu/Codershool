import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import CompleteScreen from '../screens/CompleteScreen';
import AllScreen from '../screens/AllScreen ';
import ActiveScreen from '../screens/ActiveScreen';
import SingleTodoScreen from '../screens/SingleScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const CompleteStack = createStackNavigator(
  {
    Complete: CompleteScreen
  },
  config
);

CompleteStack.navigationOptions = {
  tabBarLabel: 'Complete',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-done-all' : 'md-done-all'} />
    
  )
};

CompleteStack.path = '';

const AllStack = createStackNavigator(
  {
    Links: AllScreen,
    SingleTodo: SingleTodoScreen
  },
  config
);

AllStack.navigationOptions = {
  tabBarLabel: 'All',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};

AllStack.path = '';

const ActiveStack = createStackNavigator(
  {
    Settings: ActiveScreen,
  },
  config
);

ActiveStack.navigationOptions = {
  tabBarLabel: 'Active',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ActiveStack.path = '';

const tabNavigator = createBottomTabNavigator({
  CompleteStack, 
  AllStack,
  ActiveStack,
});

tabNavigator.path = '';

export default tabNavigator;
