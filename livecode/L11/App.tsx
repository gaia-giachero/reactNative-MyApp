import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const nameOk = name.trim().length >= 2;
  const emailOk = email.includes("@");
  const shouldSimulateError = message.trim().toLowerCase().includes("error");
  const messageOk = message.trim().length >= 10 || shouldSimulateError;
  const canSubmit = nameOk && emailOk && messageOk;
  const isSending = status === "loading";

  function onSubmit() {
    setSubmitted(true);
    setStatus("loading");
    const id = setTimeout(() => {
      if (shouldSimulateError) {
        setStatus("error");
      } else if (nameOk && emailOk && messageOk) {
        setStatus("success");
        setName('');
        setEmail('');
        setMessage('');
        setSubmitted(false);
      } else {
        setStatus('error');
      }
    }, 1000);
    return () => clearTimeout(id);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
          keyboardVerticalOffset={50}
        >
          <ScrollView>
            <TextInput
              style={styles.row}
              value={name}
              onChangeText={setName}
              placeholder="Name"
            />
            {submitted && !nameOk && (
              <Text>Name must have at least 2 characters</Text>
            )}
            <TextInput
              style={styles.row}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              placeholder="Email"
            />
            {submitted && !emailOk && <Text>Email must include @</Text>}
            <TextInput
              style={styles.row}
              value={message}
              onChangeText={setMessage}
              multiline
              placeholder="How can we help?"
            />
            {submitted && !messageOk && (
              <Text>Message must have at least 10 characters</Text>
            )}
            <Pressable
              onPress={onSubmit}
              disabled={isSending}
              style={{
                opacity: canSubmit && !isSending ? 1 : 0.4,
                padding: 14,
                borderRadius: 8,
                backgroundColor: "#007AFF",
              }}
            >
              <Text style={{ color: "#fff", textAlign: "center" }}>
                {status === "loading" ? "Sending..." : "Send"}
              </Text>
            </Pressable>
            {status === 'success' && <Text style={styles.valid}>Campi inviati correttamente</Text>}
            
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 15 },
  row: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 40,
    paddingLeft: 20,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#e5f1ff",
    borderColor: "#007AFF",
    marginBottom: 10,
  },
  valid: {
    color: "#06aa00",
    textAlign: "center",
    marginTop: 5,
  }
});
