import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,Image } from 'react-native';
import {Header} from 'react-native-elements';
import Calenderscreen from "./Screens/Calenderscreen";
import Taskscreen from "./Screens/Taskscreen";
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import Homescreen from "./Screens/Homescreen"

export default class App extends React.Component{
render(){
  return (
    <View>
<AppContainer/>
    </View>
  );
}
}

var AppNavigator = createSwitchNavigator({
  Homescreen:Homescreen,
  Taskscreen : Taskscreen, 
  Calenderscreen:Calenderscreen,
 
})

const AppContainer = createAppContainer(AppNavigator);