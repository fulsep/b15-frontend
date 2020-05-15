import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TextInput, CheckBox, TouchableOpacity } from 'react-native'

import accent1 from '../assets/images/accent_3.png'

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
  input: {
    backgroundColor: '#4B4610',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'left',
    paddingLeft: 20,
    fontSize: 20
  },
  content: {
    marginTop: 200
  },
  w80: {
    width: '80%'
  },
  w100: {
    width: '100%'
  },
  tos: {
    marginTop: 10,
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    height: 50,
    width: 150,
    backgroundColor: '#FA463D',
    borderRadius: 10
  },
  btnText: {
    color: 'white',
    fontSize: 18
  },
  haveAccount: {
    marginTop: 10
  }
})

export default class App extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.absoluteLayer}>
          <View style={styles.layer1}>
            <Image source={accent1} style={styles.accent1} />
          </View>
        </View>
        <View style={[styles.parent, styles.center]}>
          <View style={[styles.w80, styles.center, styles.content]}>
            <TextInput placeholder='Full Name' placeholderTextColor='white' style={[styles.input, styles.w100]} />
            <TextInput placeholder='Email' placeholderTextColor='white' style={[styles.input, styles.w100]} />
            <TextInput placeholder='Password' placeholderTextColor='white' style={[styles.input, styles.w100]} />
            <TextInput placeholder='Confirm Password' placeholderTextColor='white' style={[styles.input, styles.w100]} />
            <View style={[styles.row, styles.tos]}>
              <CheckBox />
              <Text style={styles.generalText}>I agree with terms and conditions</Text>
            </View>
            <TouchableOpacity style={[styles.btn, styles.center]}>
              <Text style={styles.btnText}>Sign up</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.haveAccount}>
            <Text style={styles.generalText}>I already have an account</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
