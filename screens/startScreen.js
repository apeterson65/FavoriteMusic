import { View, Text, StyleSheet, TextInput, Button } from "react-native";

import { GlobalColors } from "../ColorScheme/ColorStyle";

function StartScreen() {
  return (
    <View style={styles.container} >
      <View style={styles.title} >
        <Text>Welcome to the Music app</Text>
      </View>
      <View style={styles.login}>
      <TextInput>Enter username</TextInput>
      <TextInput>Enter Password</TextInput>
      </View>
      <View style={styles.submit} >
      <Button title="submit" />
      <Button title="Create New Account" />
      </View>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 30,
    alignItems: "center",
    backgroundColor: GlobalColors.colors.niceCream,
  },
title: {
//flex: 2,
margin: 20, 
padding: 20,
borderRadius: 30,
color: GlobalColors.colors.blueish,
backgroundColor: GlobalColors.colors.redish,

},
login: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
},  
submit: {
    flex:2
}

});
