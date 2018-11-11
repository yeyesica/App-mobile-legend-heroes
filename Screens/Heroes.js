import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Heroes extends React.Component{
  render(){
    return(
      <View style={nbStyles.subtitle}>
          <Text style={{fontSize: 25, marginTop:20, textAlign: 'center', color: 'white', fontWeight : 'bold'}}>
            Heroes
          </Text>

          <Image
           style={{alignSelf: 'center', width: 320, height:160, marginBottom: 5, marginTop:10, }}
            source={{uri: 'https://satiasite.files.wordpress.com/2018/02/1518850443424.png?w=669'}}
          />

          <Image
           style={{alignSelf: 'center', width: 60, height:150, marginBottom: 5, marginTop:5, }}
            source={{uri: 'https://cdn130.picsart.com/260126490007212.png?r240x240'}}
          />

          <Image
           style={{alignSelf: 'center', width: 200, height:200, marginBottom: 30, marginTop:5, }}
            source={{uri: 'https://vignette.wikia.nocookie.net/mobalegends/images/3/3f/Ember_Pose.png/revision/latest?cb=20160904004522'}}
          />

        </View>
    );
  }
}

const nbStyles = {
    subtitle: {
      backgroundColor: '#000066',

    },
    btn: {
      alignItems: 'center',
      marginTop: 30,
      borderRadius: 25,
    },
  }