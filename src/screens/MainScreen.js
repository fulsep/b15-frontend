import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {connect} from 'react-redux'

import {getData} from '../redux/actions/auth'

import accent1 from '../assets/images/accent_4.png'
import gold_member from '../assets/images/gold_member.png'

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  absoluteLayer: {
    // position: 'absolute',
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height - 72,
  },
  layer1: {
    justifyContent: 'space-between',
    position: 'relative'
  },
  accent1: {
    width: '100%',
    resizeMode: 'stretch'
  },
  memberParent: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0
  },
  memberIndicator: {
    width: '85%',
    resizeMode: 'cover'
  },
  basicInfo: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    bottom: 80,
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row'
  },
  infoAmt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  infoText: {
    color: 'white'
  },
  infoItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80
  },
  profileInfo: {
    position: 'absolute',
    width: '100%',
    bottom: 160,
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40
  },
  profileText: {
    marginLeft: 20
  },
  profileName: {
    fontSize: 20,
    color: 'white'
  },
  content: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  iconNav: {
    justifyContent: 'space-around',
    marginTop: 40
  },
  iconNavItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40
  },
  iconNavTitle: {
    fontSize: 12,
    color: 'black',
    marginTop: 5
  },
  section: {
    marginBottom: 30
  },
  promo: {
    marginTop: 20
  },
  promoItem: {
    height: 120,
    width: 200,
    backgroundColor: '#6C6508',
    borderRadius: 10,
    marginRight: 10
  }
})

class App extends Component {
  componentDidMount(){
    this.props.getData()
  }
  render() {
    return (
      <ScrollView style={styles.parent}>
        <View style={styles.absoluteLayer}>
          <View style={styles.layer1}>
            <Image source={accent1} style={styles.accent1} />
            <View style={[styles.profileInfo, styles.row]}>
              <View style={{position:'relative'}}>
                <View style={{position:'absolute',width: 75, height: 75, top: 5, borderRadius: 40, backgroundColor: 'transparent'}} />
                <Icon name='user-circle' solid size={80} color='#FFF' />
              </View>
              <View style={[styles.parent, styles.profileText]}>
                <Text style={styles.profileName}>
                  Michael
                </Text>
              </View>
            </View>
            <View style={[styles.basicInfo, styles.row]}>
              <View style={styles.infoItem}>
                <Text style={styles.infoAmt}>22</Text>
                <Text style={styles.infoText}>Transaction</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoAmt}>20</Text>
                <Text style={styles.infoText}>Success</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoAmt}>2</Text>
                <Text style={styles.infoText}>Failed</Text>
              </View>
            </View>
            <View style={styles.memberParent}>
              <Image source={gold_member} style={styles.memberIndicator} />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>My Transaction</Text>
            <View style={[styles.iconNav, styles.row]}>
              <View style={styles.iconNavItem}>
                <Icon name='box' solid size={40} color='#6C6508' />
                <Text style={styles.iconNavTitle}>All</Text>
              </View>
              <View style={styles.iconNavItem}>
                <Icon name='calendar' size={40} color='#6C6508' />
                <Text style={styles.iconNavTitle}>Date</Text>
              </View>
              <View style={styles.iconNavItem}>
                <Icon name='toolbox' solid size={40} color='#6C6508' />
                <Text style={styles.iconNavTitle}>Trip</Text>
              </View>
              <View style={styles.iconNavItem}>
                <Icon name='location-arrow' solid size={40} color='#6C6508' />
                <Text style={styles.iconNavTitle}>Locale</Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Promo</Text>
            <ScrollView style={styles.promo} horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.promoItem} />
              <View style={styles.promoItem} />
              <View style={styles.promoItem} />
              <View style={styles.promoItem} />
              <View style={styles.promoItem} />
            </ScrollView>
          </View>
          <View style={styles.article}>
            <Text style={styles.sectionTitle}>Article</Text>
            <ScrollView style={styles.promo} horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.promoItem} />
              <View style={styles.promoItem} />
              <View style={styles.promoItem} />
              <View style={styles.promoItem} />
              <View style={styles.promoItem} />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = { getData }

export default connect(mapStateToProps, mapDispatchToProps)(App)