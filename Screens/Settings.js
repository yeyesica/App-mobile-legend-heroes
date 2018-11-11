import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Settings extends React.Component{
	render(){
		return(
			<View style={styles.container}>
				<Image
            	style={{alignItems: 'center', width: 300, height:180, marginBottom: 5, marginTop:10, }}
            	source={{uri: 'https://cdn140.picsart.com/259493061011212.png?r1024x1024'}}
            	/>
				
                <Text style={styles.edit}>Yesica Adelia Ramadani </Text>
                <Text style={styles.edit}>Level 999 </Text>
                <Text style={styles.edit}>XI RPL 4 </Text>
                <Text style={styles.edit}>Purwokerto, Central Java </Text>
				<Text style={{ marginBottom : 100}}></Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000066',
  },

  edit : {
	color : "#fff",
	fontSize : 14,
	}
});