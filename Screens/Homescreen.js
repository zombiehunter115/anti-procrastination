import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Homescreen extends React.Component{
  render(){
    return(
  

    <View>
 <SafeAreaView style={styles.droidSafeArea} />
      <Header 
     backgroundColor={'aliceblue'}
          centerComponent={{
            text: 'To help stop procrastinating',
            style: { color: 'red', fontSize: 15 },
          }}
        />
    <Text > Task can be used to mark date or events for the week </Text>

    <Text style = {styles.somethingnew}> calender is dependant on what is put in the task screen </Text>

    <TouchableOpacity
    style={styles.something}   onPress={()=>{
     this.props.navigation.navigate("Calenderscreen") 
    }
    }>  
  <Text style={styles.blank}>  calendar </Text>
  


    </TouchableOpacity>

    <TouchableOpacity style={styles.something1} onPress={()=>
    {
    this.props.navigation.navigate("Taskscreen")  
    }}>

<Text style={styles.missing}> tasks </Text>

    </TouchableOpacity>
    
    <Text style = {styles.credit}> by Andrew Tabang </Text>
    
    </View>
    )
  }
  
}
const styles = StyleSheet.create({

something: {
  
  width:80,
  height:80,
  backgroundColor:"#8bb8e6",
  justifyContent:"center",
  marginLeft:195,
  marginTop:100,

},
blank: {
  fontSize: 20,
  marginLeft:2,
  marginBottom: 29
},
something1: {
  
  width:80,
  height:80,
  backgroundColor:"#8bb8e6",
  justifyContent:"center",
  marginLeft:55,
  marginTop:-80,
 
}, 


missing: {
  fontSize: 20,
  marginLeft: 15,
},
create: {
  justifyContent:"centar",
  marginLeft:115,
  marginTop:0
},
somethingnew: {
  marginTop: 40,
  color: "#81613c"
},
credit: {
  justifyContent:"centar",
  marginLeft:70
},
droidSafeArea: {
   marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
},

})