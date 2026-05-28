import React from "react";
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Pressable,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [email, setEmail] = React.useState("");
  const emailOk = email.includes("@");
  const [password, setPassword] = React.useState("");
  const passwordOk = password.length >= 6;

  const [submitted, setSubmitted] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  function messLog() {
    setSubmitted(true); 
    if (emailOk && passwordOk) {
      setLoggedIn(true);
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.bkgLogin}>
            <TextInput
              style={styles.row}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />
            {submitted && !emailOk && <Text>Email must include @</Text>}

            <TextInput
              style={styles.row}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
            />

            {submitted && !passwordOk && <Text>Min 6 characters</Text>}

            <Pressable
              style={[styles.btn, (!email || !password) && { opacity: 0.5 }]}
              onPress={messLog}
              disabled={!email || !password}
            >
              <Text style={styles.btnTxt}>Submit</Text>
            </Pressable>
            {loggedIn && emailOk && passwordOk && (
              <Text style={styles.valid}>Logged In</Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 40,
    paddingLeft: 20,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#fff9d899",
    borderColor: "#ffd900",
    marginBottom: 10,
  },
  container: {
    marginRight: 15,
    marginLeft: 15,
  },
  bkgLogin: {
    backgroundColor: "#ffe96e",
    padding: 20,
    borderRadius: 20,
  },
  textError: {
    color: "red",
    fontWeight: "bold",
  },
  btn: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 40,
    paddingLeft: 20,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#ffd900",
    backgroundColor: "#fff9d8",
  },
  btnTxt: {
    textAlign: "center",
  },
  valid: {
    color: "#06aa00",
    textAlign: "center",
    marginTop: 5,
  },
});
