import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'

import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import MainScreen from './MainScreen'

const Stack = createStackNavigator()

const BottomTab = createBottomTabNavigator()

class BottomStack extends Component {
  render(){
    return(
      <BottomTab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#6C6508',
          },
          activeTintColor: '#AAA',
          inactiveTintColor: 'white'
        }}
      >
        <BottomTab.Screen
          component={MainScreen}
          name='main'
          options={{
            tabBarIcon: ({size, color})=><Icon name='home' size={size} color={color} />,
            tabBarLabel: 'Home',
          }}
        />
        <BottomTab.Screen
          component={MainScreen}
          name='history'
          options={{
            tabBarIcon: ({size, color})=><Icon name='list' size={size} color={color} />,
            tabBarLabel: 'History',
          }}
        />
          <BottomTab.Screen
            component={MainScreen}
            name='profile'
            options={{
              tabBarIcon: ({size, color})=><Icon name='user-circle' solid size={size} color={color} />,
              tabBarLabel: 'Profile',
            }}
          />
      </BottomTab.Navigator>
    )
  }
}

class App extends Component {
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            {this.props.auth.credentials.token === null &&(
              <>
                <Stack.Screen component={LoginScreen} options={{headerShown: false}} name='login' />
                <Stack.Screen component={RegisterScreen} options={{headerShown: false}} name='register' />
              </>
            )}
            <Stack.Screen component={BottomStack} options={{headerShown: false}} name='main' />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)
