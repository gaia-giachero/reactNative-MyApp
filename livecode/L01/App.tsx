import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface GreetingProp {
  name: String;
}

function Greeting({ name }: GreetingProp) {
  /* .trim() toglie eventuali spazi all'inizio o alla fine */
  const safeName = String(name ?? "").trim();
  return <Text>{safeName}</Text>
}

function DemoButton(){
  const [clicks, setClicks] = useState(false);
  return(
    <View>
      <Pressable 
        onPress={() => setClicks(true)}
        style={styles.button}>
        <Text style={styles.text}>Tap me!</Text>
      </Pressable>
      {clicks ? <Text style={styles.text}>You tapped!</Text> : null}
    </View>
  )
}

export default function App() {
  const [state, setState] = useState(false);
  return (
    <View style={styles.container} >
      <Text style={styles.text}>Hello</Text>
      <Text>RN renders native views, no HTML</Text>
      <DemoButton />
      <Greeting name="Gaia" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10, 
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#ff00ff',
    backgroundColor: '#ffd2ff',
    margin: 5,
    boxShadow: '0px 0px 10px #a2a2a2',
  },
  text: {
    color: '#ff00ff', 
    fontWeight: 700,
  },
  statusBar: {
    backgroundColor: '#ea1717',
  },
});
