import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import {
  TextAnimationFadeIn,
  TextAnimationZoom,
  TextAnimationRain,
  TextAnimationSlideDown,
  TextAnimationSlideUp,
  TextAnimationSlideLeft,
  TextAnimationSlideRight,
  TextAnimationShake,
  TextAnimationReverse,
  TextAnimationDeZoom,
} from 'react-native-text-effects';

export default class Calenderscreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const text = this.props.navigation.getParam('text');
    const text1 = this.props.navigation.getParam('text1');
    const text2 = this.props.navigation.getParam('text2');
    const text3 = this.props.navigation.getParam('text3');
    const text4 = this.props.navigation.getParam('text4');
    const text5 = this.props.navigation.getParam('text5');
    const text6 = this.props.navigation.getParam('text6');

    return (
      <View>
        <Header
          backgroundColor={'White'}
          centerComponent={{
            text: 'Calender',
            style: { fontSize: 18 },
          }}
        />
        <TextAnimationFadeIn
          value={text}
          delay={10}
          duration={200}
          style={{ color: 'black', fontSize: 20 }}
          a
        />
        <TextAnimationFadeIn
          value={text1}
          delay={10}
          duration={200}
          style={{ color: 'black', fontSize: 20 }}
          a
        />
        <TextAnimationFadeIn
          value={text2}
          delay={10}
          duration={200}
          style={{ color: 'black', fontSize: 20 }}
          a
        />

         <TextAnimationFadeIn
          value={text3}
          delay={10}
          duration={200}
          
          style={{ color: 'black', fontSize: 20, }}
          a
        />


        <TextAnimationRain
          value={text4}
          delay={100}
          duration={250}
          fontSize={20}
          sizeRain={10}
          style={{ color: 'black' }}
        />

        <TextAnimationFadeIn
          value={text5}
          delay={10}
          duration={200}
          style={{ color: 'black', fontSize: 20 }}
          a
        />
        <TextAnimationFadeIn
          value={text6}
          delay={10}
          duration={200}
          style={{ color: 'black', fontSize: 20 }}
          a
        />
      </View>
    );
  }
}
