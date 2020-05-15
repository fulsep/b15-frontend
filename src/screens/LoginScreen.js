import React, { Component } from 'react'
import {
  Text, View, StyleSheet,
  Image, Dimensions, StatusBar,
  TextInput, TouchableOpacity,
  CheckBox, Alert
 } from 'react-native'
import {connect} from 'react-redux' 
import {login} from '../redux/actions/auth'

import accent1 from '../assets/images/accent_1.png'
import accent2 from '../assets/images/accent_2.png'

import Icon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  absoluteLayer: {
    position: 'absolute',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height - 72,
  },
  layer1: {
    flex: 1,
    justifyContent: 'space-between',
    position: 'relative'
  },
  accent1: {
    width: '100%',
    resizeMode: 'stretch'
  },
  accent2: {
    width: '100%',
    resizeMode: 'stretch',
  },
  input: {
    backgroundColor: '#4B4610',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  w80: {
    width: '80%'
  },
  w100: {
    width: '100%'
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: '#FA463D',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10
  },
  btnDisabled: {
    height: 50,
    width: 150,
    backgroundColor: '#888',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10
  },
  btnText: {
    color: 'white',
    fontSize: 18
  },
  generalText: {
    color: 'black',
    fontSize: 18
  },
  row: {
    flexDirection: 'row'
  },
  rememberInput: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  content: {
    marginTop: 100
  },
  forgotPass: {
    // marginTop: 10
  }
})

class App extends Component {
  state = {
    username: '',
    password: ''
  }
  login = () => {
    this.props.login(this.state.username, this.state.password)
  }
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.absoluteLayer}>
          <View style={styles.layer1}>
            <Image source={accent1} style={styles.accent1} />
            <Image source={accent2} style={styles.accent2} />
          </View>
        </View>
        <View style={[styles.parent, styles.center]}>
          <View style={[styles.w80, styles.center, styles.content]}>
            <Icon name='user-circle' solid size={150} color={'#6C6508'} />
              {this.props.auth.message!=='' && <Text style={{color: 'red', fontSize: 18, fontWeight: 'bold', margin: 5}}>{this.props.auth.message}</Text>}
            <TextInput onChangeText={username=>this.setState({username})} placeholder='Username' placeholderTextColor='white' style={[styles.input, styles.w100]} />
            <TextInput onChangeText={password=>this.setState({password})} placeholder='Password' placeholderTextColor='white' style={[styles.input, styles.w100]} />
            <View style={[styles.row, styles.rememberInput]}>
              <CheckBox />
              <Text style={styles.generalText}>Remember Me</Text>
            </View>
            <TouchableOpacity style={styles.forgotPass}>
              <Text style={styles.generalText}>Forget password?</Text>
            </TouchableOpacity>
            <TouchableOpacity disabled={this.props.auth.isLoading} onPress={()=>this.login()} style={[this.props.auth.isLoading?styles.btnDisabled:styles.btn, styles.center]}>
              <Text style={styles.btnText}>{this.props.auth.isLoading ? 'Loading...' : 'Sign In'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotPass} onPress={()=>this.props.navigation.navigate('register')}>
              <Text style={styles.generalText}>I Don't have an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {login}

export default connect(mapStateToProps, mapDispatchToProps)(App)