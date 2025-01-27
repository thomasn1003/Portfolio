/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage, 
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Button,Icon } from 'native-base';

import Set from './Set.js';
import Exercise from './Exercise.js';
import Workout from './Workout.js';
import FooterPack from './Footer.js';
import Routine from './Routine.js';



export default class wapp extends Component {
  constructor(props) {
    super(props);

    this.state = { view: "home" };

    this.viewHandler = this.viewHandler.bind(this);
  }

  viewHandler(statevar) {
    switch (statevar) {
        case 'home':
          this.setState({view: "home"});
          break;
        case 'workouts':
          console.log("workouts");
          this.setState({view: "workouts"});
          break;
        case 'settings':
          console.log("settings");
          this.setState({view: "settings"});
          break;
        default:
          this.setState({view: "home"});
      }
  }

  render() {

    var view = this.state.view;

    var comp = null;
    if (view === "home") {
      comp = <Text> Home </Text>;
    } else if (view === "workouts") {
      comp = <Routine />;
    } else {
      comp = <Text> Settings </Text>;
    }

    return (
      <View style={{padding: 10, flex: 1}}>    

        <View style={{alignItems: 'center', flex: 1, paddingTop: 30, backgroundColor: 'white'}}>
            <Text style={textStyles.titleText}> The Wapp </Text>
        </View>

        <View style={{flex: 10}}>
          {comp} 
        </View>


        <View style={{flex: 1}}>
          <FooterPack handler={this.viewHandler}/>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const textStyles = StyleSheet.create({
  baseText: {
    fontFamily: 'HelveticaNeue-UltraLight',
    fontSize: 20,

    // 'Helvetica Neue UltraLight',
      //         'Helvetica Neueu', Helvetica, Arial, sans-serif;
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "black",
    flex: 1,
  },
});

AppRegistry.registerComponent('wapp', () => wapp);
