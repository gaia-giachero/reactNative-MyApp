import React from "react";
import { StyleSheet, ScrollView, Text, Pressable, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [status, setStatus] = React.useState("loading");

  function load(fail: boolean = false) {
    setStatus("loading");
    const id = setTimeout(() => {
      setStatus(fail ? "error" : "success");
    }, 1000);
    return () => clearTimeout(id);
  }

  React.useEffect(() => {
    return load(false);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {status === "loading" && <Text>Caricamento...</Text>}
          {status === "success" && <Text>✅ Successo!</Text>}
          {status === "error" && <Text>❌ Errore!</Text>}

          <View style={styles.row}>
            <Pressable onPress={() => load(true)} style={styles.btn}>
              <Text style={styles.btnTxt}>Retry</Text>
            </Pressable>
            <Pressable onPress={() => load(false)} style={styles.btn}>
              <Text style={styles.btnTxt}>Reload</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { marginHorizontal: 15 },
  row: { flexDirection: "row", gap: 10, marginTop: 20 },
  btn: {
    width: 100,
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#ff004c",
    backgroundColor: "#ffe4ec",
  },
  btnTxt: {
    textAlign: "center",
    color: "#ff004c",
    fontWeight: "bold",
  },
});