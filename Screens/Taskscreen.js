import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { Header } from 'react-native-elements';
import Calenderscreen from './Calenderscreen';
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';

export default class Taskscreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
    };
  }

  submitButton = async () => {
    this.setState({ text: '' });
    this.setState({ text1: '' });
    this.setState({ text2: '' });
    this.setState({ text3: '' });
    this.setState({ text4: '' });
    this.setState({ text5: '' });
    this.setState({ text6: '' });
  };

  saveButton = async (text, text1, text2, text3, text4, text5, text6) => {
    this.props.navigation.navigate('Calenderscreen', { text: text },)
    this.props.navigation.navigate('Calenderscreen', { text1: text1 },);
    this.props.navigation.navigate('Calenderscreen', { text2: text2 },);
    this.props.navigation.navigate('Calenderscreen', { text3: text3 },);
    this.props.navigation.navigate('Calenderscreen', { text4: text4 },);
    this.props.navigation.navigate('Calenderscreen', { text5: text5 },);
    this.props.navigation.navigate('Calenderscreen', { text6: text6 },);
  };

  render() {
    var { text, text1, text2, text3, text4, text5, text6 } = this.state;
    return (
      <ScrollView>
        <Header
          backgroundColor={'White'}
          centerComponent={{
            text: 'My self planner',
            style: { fontSize: 18 },
          }}
        />

        <Image
          style={styles.medusa}
          source={require("../assets/istockphoto-537211561-170667a.jpg")}></Image>
        <Text style={styles.john}>you can place any work in any box </Text>

        <TextInput
          placeholder="Monday"
          placeholderTextColor="#123400"
          style={styles.container}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TextInput
          placeholder="Tuesday"
          placeholderTextColor="#123400"
          style={styles.container}
          onChangeText={(text1) => {
            this.setState({ text1: text1 });
          }}
          value={this.state.text1}
        />

        <TextInput
          placeholder="Wednesday"
          placeholderTextColor="#123400"
          style={styles.container}
          onChangeText={(text2) => {
            this.setState({ text2: text2 });
          }}
          value={this.state.text2}
        />
        <TextInput
          placeholder="Thursday"
          placeholderTextColor="#123400"
          style={styles.container}
          onChangeText={(text3) => {
            this.setState({ text3: text3 });
          }}
          value={this.state.text3}
        />
        <TextInput
          placeholder="Friday"
          placeholderTextColor="#123400"
          style={styles.container}
          onChangeText={(text4) => {
            this.setState({ text4: text4 });
          }}
          value={this.state.text4}
        />
        <TextInput
          placeholder="Saturday"
          placeholderTextColor="#123400"
          style={styles.container}
          onChangeText={(text5) => {
            this.setState({ text5: text5 });
          }}
          value={this.state.text5}
        />
        <TextInput
          placeholder="Sunday"
          placeholderTextColor="#123400"
          style={styles.container}
          onChangeText={(text6) => {
            this.setState({ text6: text6 });
          }}
          value={this.state.text6}
        />
        <TouchableOpacity
          style={styles.charlemange}
          onPress={() => {
            this.saveButton(
              this.state.text,
              this.state.text1,
              this.state.text2,
              this.state.text3,
              this.state.text4,
              this.state.text5,
              this.state.text6
            );
          }}>
          <Text>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gorgon}
          onPress={() => {
            this.submitButton();
          }}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    justifyContent: 'center',
    marginTop: 10,
    width: 220,
    height: 75,
    borderWidth: 5,
    borderColor: 'black',
    marginLeft: 10,
    textAlign: 'centar',
    backgroundColor:"cyan"
  },
  john: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  medusa: {
    width: 200,
    height: 200,
    marginLeft: 60,
    marginTop: 5,
    scaleWidth:0.15,
    
   },
  charlemange: {
    width: 100,
    height: 35,
    borderColor: 'orange',
    borderRadius: 1,
    backgroundColor: 'cyan',
    marginLeft: 220,
    justifyContent: 'centar',
    borderWidth:3
    },
    gorgon: {
    width: 100,
    height: 50,
    justifyContent: 'centar',
    backgroundColor: '#E563F7',
    borderColor:"black",
    borderWidth:3,
    
  },
});